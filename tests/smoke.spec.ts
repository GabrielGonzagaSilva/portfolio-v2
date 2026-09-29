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
    const results = await new AxeBuilder({ page })
      // The selected nav label is white over a separate animated dark pill layer.
      // Axe evaluates the label against the page behind that sibling layer, producing a false positive.
      .exclude('[aria-current="page"]')
      .analyze();
    const serious = results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );
    expect(serious).toEqual([]);
  });
}

test("home project previews request high quality optimized images", async ({ page }) => {
  await page.goto("/");
  const image = page.locator('a[aria-label^="Abrir projeto"] img').first();
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute("srcset", /q=95/);
});

for (const route of ["/projects/quantolab", "/projects/roteiro-do-sul"]) {
  test(`${route} expands project images and returns to the case`, async ({ page }) => {
    await page.goto(route);

    const image = page.locator("main img").first();
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("role", "button");
    await expect(image).toHaveAttribute("aria-haspopup", "dialog");

    await image.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.locator("img")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(image).toBeFocused();
  });
}

test("serves hardened browser headers", async ({ request }) => {
  const response = await request.get("/");
  const headers = response.headers();

  expect(headers["x-powered-by"]).toBeUndefined();
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["x-frame-options"]).toBe("DENY");
  expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(headers["cross-origin-opener-policy"]).toBe("same-origin");
  expect(headers["content-security-policy"]).toContain("default-src 'self'");
  expect(headers["content-security-policy"]).toContain("object-src 'none'");
  expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
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
