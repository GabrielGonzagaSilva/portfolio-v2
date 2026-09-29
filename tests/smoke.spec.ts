import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const publicRoutes = [
  "/",
  "/about",
  "/projects/quantolab",
  "/projects/roteiro-do-sul",
];

for (const route of publicRoutes) {
  test(`${route} renders without horizontal overflow`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("body")).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test(`${route} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );
    expect(serious).toEqual([]);
  });
}

test("does not expose the framework header", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.headers()["x-powered-by"]).toBeUndefined();
});

for (const route of [
  "/vagas",
  "/api/vagas",
  "/api/internal/figma-asset",
  "/job-radar/",
  "/job-radar-deploy-20260922.txt",
  "/job-radar-gupy-20260922.txt",
]) {
  test(`${route} is not publicly exposed`, async ({ request }) => {
    const response = await request.get(route);
    expect(response.status()).toBe(404);
    expect(response.headers()["x-robots-tag"]).toContain("noindex");
    expect(response.headers()["cache-control"]).toContain("no-store");
  });
}
