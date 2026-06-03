import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('Login, view product listing, and add product to cart', { tag: ["@smoke","@regression","@P0","@smoke-login-listing-add-cart"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto('/');
  });

  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.auth.username);
  });

  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.auth.password);
  });

  await test.step('Click — Click login button', async () => {
    await loginPage.clickLoginButton();
  });

  await test.step('Assert visible — Verify inventory page is displayed', async () => {
    await inventoryPage.expectProductsVisible();
  });

  await test.step("Click — Click 'Add to Cart' for Sauce Labs Backpack", async () => {
    await inventoryPage.clickAddToCartSauceLabsBackpack();
  });

  await test.step('Assert text — Verify cart icon shows 1 item', async () => {

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
});
