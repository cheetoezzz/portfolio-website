import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('production page preserves links, serves assets and has valid local destinations', async ({ page, request }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle('Arc John Torralba | WordPress & Web Developer');
  await expect(page.locator('h1')).toHaveText('Arc John Torralba');
  await expect(page.locator('.project-card')).toHaveCount(2);
  for (const url of ['https://github.com/cheetoezzz/concert-event-tracker', 'https://event-tracker-lilac-tau.vercel.app/', 'https://github.com/cheetoezzz/ecom', 'https://e-commerce-seven-mu-53.vercel.app/', 'mailto:torralbaarcjohn@gmail.com', 'https://www.linkedin.com/in/arcjohntorralba/', 'https://github.com/cheetoezzz']) {
    expect(await page.locator(`a[href="${url}"]`).count()).toBeGreaterThan(0);
  }
  const broken = await page.evaluate(() => [...document.querySelectorAll<HTMLAnchorElement>('a')].filter(a => a.hash && a.origin === location.origin && !document.getElementById(a.hash.slice(1))).map(a => a.href));
  expect(broken).toEqual([]);
  for (const path of ['/favicon.svg', '/robots.txt', '/sitemap-index.xml', '/sitemap-0.xml', '/social-card.png']) expect((await request.get(path)).ok()).toBeTruthy();
  await page.locator('#about').scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator('.hero-photo img, .workspace-photo > img').evaluateAll(images => images.length === 2 && images.every(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0 && new URL((image as HTMLImageElement).currentSrc).origin === location.origin))).toBe(true);
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator('.project-image img').evaluateAll(images => images.every(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0))).toBe(true);
  expect(errors).toEqual([]);
});

test('theme defaults to dark, persists, and is keyboard accessible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('button', { name: 'Switch to light theme' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await expect(page.getByRole('button', { name: 'Switch to dark theme' })).toHaveAttribute('aria-pressed', 'true');
  await page.screenshot({ path: 'qa-results/desktop-light.png', fullPage: true });
});

for (const width of [320, 375, 768, 1024, 1440]) {
  test(`responsive layout and navigation at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const expertiseColumns = await page.locator('.expertise-grid').evaluate(grid => getComputedStyle(grid).gridTemplateColumns.split(' ').length);
    expect(expertiseColumns).toBe(width <= 480 ? 1 : width <= 1100 ? 2 : 4);
    if (width <= 700) {
      const menu = page.locator('.menu-toggle');
      await menu.click();
      await expect(menu).toHaveAttribute('aria-expanded', 'true');
      await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
      await expect(menu).toHaveAttribute('aria-expanded', 'false');
    } else await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator('#main-navigation a[href="/#projects"]')).toHaveAttribute('aria-current', 'location');
    await expect.poll(() => page.locator('#projects').evaluate(section => section.getBoundingClientRect().top)).toBeGreaterThan(60);
    if (width <= 700) {
      const menu = page.locator('.menu-toggle');
      await menu.click();
      await page.keyboard.press('Escape');
      await expect(menu).toBeFocused();
      await expect(menu).toHaveAttribute('aria-expanded', 'false');
    }
    await page.goto('/');
    await page.screenshot({ path: `qa-results/viewport-${width}.png`, fullPage: true });
    if (width === 375) {
      await page.getByRole('button', { name: 'Switch to light theme' }).click();
      await page.screenshot({ path: 'qa-results/mobile-light.png', fullPage: true });
    }
  });
}

for (const theme of ['dark', 'light']) {
  test(`WCAG accessibility in ${theme} theme`, async ({ page }) => {
    await page.goto('/');
    if (theme === 'light') await page.getByRole('button', { name: 'Switch to light theme' }).click();
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(result.violations).toEqual([]);
  });
}

test('essential content and mobile navigation work without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(page.getByRole('heading', { name: 'Arc John Torralba' })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Projects' })).toBeVisible();
  await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
  await expect(page.getByRole('heading', { name: 'Concert Event Tracker' })).toBeVisible();
  await context.close();
});

test('reduced motion, blocked storage, and custom 404 remain usable', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  await context.addInitScript(() => { Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage disabled'); } }); });
  const page = await context.newPage();
  await page.goto(baseURL!);
  expect(await page.locator('html').evaluate(el => getComputedStyle(el).scrollBehavior)).toBe('auto');
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.goto(new URL('/404.html', baseURL).href);
  await expect(page.getByRole('heading', { name: 'Page not found.' })).toBeVisible();
  await page.getByRole('link', { name: 'Back to portfolio' }).click();
  await expect(page.locator('h1')).toHaveText('Arc John Torralba');
  await context.close();
});
