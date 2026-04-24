import { test, expect } from "@playwright/test";

const ROUTES: { path: string; needle: RegExp }[] = [
  { path: "/", needle: /Secure AI operations/i },
  { path: "/services", needle: /Three ways to work/i },
  { path: "/framework", needle: /Sovereign AI Operations Framework/i },
  { path: "/use-cases", needle: /Where AAO works/i },
  { path: "/use-cases/trades-construction", needle: /Trades & construction/i },
  { path: "/use-cases/mining-services", needle: /Mining services/i },
  { path: "/use-cases/accounting-bookkeeping", needle: /Accounting & bookkeeping/i },
  { path: "/use-cases/legal-admin", needle: /Legal admin/i },
  { path: "/use-cases/property-management", needle: /Property management/i },
  { path: "/trust", needle: /Trust is the product/i },
  { path: "/pricing", needle: /Priced against/i },
  { path: "/about", needle: /We install AI that earns trust/i },
  { path: "/insights", needle: /Insights/i },
  { path: "/insights/why-most-smb-ai-projects-fail-in-week-three", needle: /week three/i },
  { path: "/contact", needle: /Book a 15-minute audit/i },
  { path: "/legal/privacy", needle: /Privacy/i },
  { path: "/legal/terms", needle: /Terms/i },
];

for (const { path, needle } of ROUTES) {
  test(`route ${path} renders and contains expected headline`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBeLessThan(400);
    await expect(page.getByText(needle).first()).toBeVisible();
  });
}

test("home page has no console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  expect(errors).toEqual([]);
});

test("404 page renders for unknown route", async ({ page }) => {
  const response = await page.goto("/totally-nonexistent-route-xyz");
  expect(response?.status()).toBe(404);
  await expect(page.getByText(/not the page/i)).toBeVisible();
});
