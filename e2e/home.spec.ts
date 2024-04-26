import { expect, test } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('main header')).toBeVisible()
  await expect(page.locator('main header h1')).toHaveText('Welcome to your future book')
  await expect(page.locator('main nav')).toBeVisible()
  await expect(page.locator('main nav a')).toHaveCount(5)
  await expect(page.locator('main section')).toBeVisible()
  await expect(page.locator('main section button')).toHaveCount(2)
})
