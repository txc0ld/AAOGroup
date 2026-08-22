import { test, expect } from "@playwright/test";

// Agent-readiness behaviors: Markdown content negotiation (acceptmarkdown.com),
// agent-friendly 404s, llms.txt guidance, canonical + Organization schema.

test.describe("markdown content negotiation", () => {
  test("Accept: text/markdown on / serves markdown with Vary: Accept", async ({ request }) => {
    const res = await request.get("/", { headers: { Accept: "text/markdown" } });
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("text/markdown");
    expect(res.headers()["vary"]?.toLowerCase()).toContain("accept");
    const body = await res.text();
    expect(body).toContain("# OperateAI");
    expect(body).not.toContain("<html");
  });

  test("browser-style Accept on / serves HTML with Vary: Accept", async ({ request }) => {
    const res = await request.get("/", {
      headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" },
    });
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("text/html");
    expect(res.headers()["vary"]?.toLowerCase()).toContain("accept");
  });

  test("Accept: */* (curl default) serves HTML, not markdown", async ({ request }) => {
    const res = await request.get("/", { headers: { Accept: "*/*" } });
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("text/html");
  });

  test("markdown outranking html by q-value serves markdown", async ({ request }) => {
    const res = await request.get("/", { headers: { Accept: "text/markdown, text/html;q=0.5" } });
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("text/markdown");
  });

  test("article page negotiates to its markdown twin", async ({ request }) => {
    const res = await request.get("/articles/your-next-customer-wont-scroll-google/", {
      headers: { Accept: "text/markdown" },
    });
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("text/markdown");
    expect(res.headers()["vary"]?.toLowerCase()).toContain("accept");
    const body = await res.text();
    expect(body).toMatch(/^# /);
  });

  test("articles index negotiates to /articles/index.md", async ({ request }) => {
    const res = await request.get("/articles/", { headers: { Accept: "text/markdown" } });
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("text/markdown");
    expect(await res.text()).toContain("Markdown for agents");
  });

  test("unsupported Accept on a negotiated URL returns 406", async ({ request }) => {
    const res = await request.get("/", { headers: { Accept: "application/json" } });
    expect(res.status()).toBe(406);
    expect(res.headers()["vary"]?.toLowerCase()).toContain("accept");
  });
});

test.describe("agent-friendly 404", () => {
  test("markdown-preferring client gets a 404 with a markdown recovery body", async ({ request }) => {
    const res = await request.get("/some-path-that-does-not-exist", {
      headers: { Accept: "text/markdown" },
    });
    expect(res.status()).toBe(404);
    expect(res.headers()["content-type"]).toContain("text/markdown");
    const body = await res.text();
    expect(body).toContain("llms.txt");
    expect(body).toContain("sitemap.xml");
  });

  test("HTML 404 page links agents to sitemap, llms.txt and articles index", async ({ page }) => {
    const response = await page.goto("/totally-nonexistent-route-xyz/");
    expect(response?.status()).toBe(404);
    await expect(page.locator('a[href="/sitemap.xml"]')).toBeVisible();
    await expect(page.locator('a[href="/llms.txt"]')).toBeVisible();
    await expect(page.locator('a[href="/articles/index.md"]')).toBeVisible();
  });
});

test.describe("machine-readable metadata", () => {
  test("homepage declares a canonical URL", async ({ page }) => {
    await page.goto("/");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", "https://operateai.com.au/");
  });

  test("Organization JSON-LD includes contactPoint with email and contactType", async ({ page }) => {
    await page.goto("/");
    const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
    const orgBlock = jsonLd.find((t) => t.includes('"Organization"'));
    expect(orgBlock).toBeTruthy();
    const graph = JSON.parse(orgBlock!);
    const org = graph["@graph"].find((n: { "@type": string }) => n["@type"] === "Organization");
    expect(org.contactPoint[0].contactType).toBe("customer service");
    expect(org.contactPoint[0].email).toBe("team@operateai.com.au");
    expect(org.address["@type"]).toBe("PostalAddress");
  });

  test("llms.txt carries when-to-use guidance for agents", async ({ request }) => {
    const res = await request.get("/llms.txt");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain("## When to use OperateAI");
    expect(body).toContain("Accept: text/markdown");
  });

  test("homepage FAQ questions are real h3 headings without JavaScript", async ({ request }) => {
    const res = await request.get("/", { headers: { Accept: "text/html" } });
    const html = await res.text();
    expect(html).toContain("<h3>And what&#x27;s AEO?</h3>");
  });
});
