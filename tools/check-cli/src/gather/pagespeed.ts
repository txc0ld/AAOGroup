/**
 * src/gather/pagespeed.ts
 *
 * Fetches Google PageSpeed Insights (Lighthouse) scores for a URL.
 *
 * Factual-integrity notes:
 *  - Lighthouse LAB scores are non-deterministic; a single run can swing by 20+
 *    points (observed 75 vs 99 on the same site minutes apart). We therefore run
 *    MOBILE 3x and report the MEDIAN, plus the individual runs for transparency.
 *  - We also fetch DESKTOP (1 run; desktop is far more stable).
 *  - We report whether real-user CrUX FIELD data exists. If it does not, the
 *    score is a lab estimate only and must be framed that way.
 *  - Never present a single lab run as ground truth.
 *
 * Gracefully skips if no URL was supplied or GOOGLE_MAPS_API_KEY is not set.
 */

import { ENV } from "../config.js";
import type { PageSpeedResult } from "../types.js";

interface PsiResponse {
  lighthouseResult?: {
    categories?: { performance?: { score?: number } };
    audits?: { "largest-contentful-paint"?: { numericValue?: number } };
  };
  loadingExperience?: { metrics?: Record<string, unknown> };
}

interface OneRun {
  score?: number; // 0–1
  lcpSeconds?: number;
  hasFieldData: boolean;
}

// Real CrUX field-data metric keys. We only claim "field data" when at least
// one of these is present, so an empty/extrapolated loadingExperience object
// does not get reported as real-user data.
const CWV_KEYS = [
  "LARGEST_CONTENTFUL_PAINT_MS",
  "CUMULATIVE_LAYOUT_SHIFT_SCORE",
  "INTERACTION_TO_NEXT_PAINT",
  "FIRST_CONTENTFUL_PAINT_MS",
  "EXPERIMENTAL_TIME_TO_FIRST_BYTE",
];

// Returns null on ANY failure (non-OK, network throw, bad JSON, missing score)
// so a single flaky run never rejects the Promise.all and discards good runs.
async function runOne(url: string, strategy: "mobile" | "desktop"): Promise<OneRun | null> {
  try {
    const endpoint =
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}` +
      `&strategy=${strategy}&category=PERFORMANCE&key=${ENV.google}`;
    const res = await fetch(endpoint);
    if (!res.ok) return null;
    const data = (await res.json()) as PsiResponse;
    const score = data.lighthouseResult?.categories?.performance?.score;
    if (typeof score !== "number") return null;
    const lcpMs = data.lighthouseResult?.audits?.["largest-contentful-paint"]?.numericValue;
    const metrics = data.loadingExperience?.metrics;
    const hasFieldData = !!metrics && CWV_KEYS.some((k) => k in metrics);
    return {
      score,
      lcpSeconds: typeof lcpMs === "number" ? Math.round((lcpMs / 1000) * 10) / 10 : undefined,
      hasFieldData,
    };
  } catch {
    return null;
  }
}

function median(nums: number[]): number {
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

export async function gatherPageSpeed(url?: string): Promise<PageSpeedResult> {
  if (!url) return { available: false, note: "no website URL supplied" };
  if (!ENV.google) return { available: false, note: "GOOGLE_MAPS_API_KEY not set" };

  try {
    // 3 mobile runs (for a stable median) + 1 desktop, concurrently.
    const settled = await Promise.all([
      runOne(url, "mobile"),
      runOne(url, "mobile"),
      runOne(url, "mobile"),
      runOne(url, "desktop"),
    ]);
    const mobileRunsRaw = settled.slice(0, 3).filter((r): r is OneRun => r !== null);
    const desktopRun = settled[3];

    if (mobileRunsRaw.length === 0) {
      return { available: false, note: "PageSpeed API returned no usable mobile result" };
    }

    const mobileScores = mobileRunsRaw.map((r) => r.score as number);
    const med = median(mobileScores);
    const lcpVals = mobileRunsRaw.map((r) => r.lcpSeconds).filter((v): v is number => v !== undefined);
    const lcp = lcpVals.length ? Math.round(median(lcpVals) * 10) / 10 : undefined;
    const hasFieldData = mobileRunsRaw.some((r) => r.hasFieldData) || !!desktopRun?.hasFieldData;

    const spread = Math.round((Math.max(...mobileScores) - Math.min(...mobileScores)) * 100);
    const method =
      `Lighthouse lab estimate. Mobile = median of ${mobileScores.length} runs ` +
      `(${mobileScores.map((s) => Math.round(s * 100)).join(", ")}${spread >= 10 ? `; varies by ${spread} pts` : ""}). ` +
      (hasFieldData ? "Real-user field data (CrUX) available." : "No real-user field data for this site yet — lab only.");

    return {
      available: true,
      performance: med,
      performanceDesktop: desktopRun?.score,
      lcpMobileSeconds: lcp,
      mobileRuns: mobileScores,
      hasFieldData,
      methodNote: method,
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { available: false, note: `PageSpeed fetch error: ${msg}` };
  }
}
