import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class InventoryPage {
  private static readonly L = {
    openMenu: { strategy: 'css' as const, value: '#react-burger-menu-btn', actionKind: 'button' as const },
    products: { strategy: 'text' as const, value: 'Products', actionKind: 'text' as const },
    nameAToZ: { strategy: 'text' as const, value: 'Name (A to Z)', actionKind: 'text' as const },
    nameAToZ2: { strategy: 'text' as const, value: 'Name (A to Z) Name (Z to A) Price (low to high) Price (high to low)', actionKind: 'combobox' as const },
    item4Img: { strategy: 'css' as const, value: '#item_4_img_link', actionKind: 'link' as const },
    sauceLabsBackpack: { strategy: 'css' as const, value: '#item_4_title_link', actionKind: 'link' as const },
    addToCartSauceLabsBackpack: { strategy: 'css' as const, value: '#add-to-cart-sauce-labs-backpack', actionKind: 'button' as const },
    item0Img: { strategy: 'css' as const, value: '#item_0_img_link', actionKind: 'link' as const },
    sauceLabsBikeLight: { strategy: 'css' as const, value: '#item_0_title_link', actionKind: 'link' as const },
    addToCartSauceLabsBikeLight: { strategy: 'css' as const, value: '#add-to-cart-sauce-labs-bike-light', actionKind: 'button' as const },
    item1Img: { strategy: 'css' as const, value: '#item_1_img_link', actionKind: 'link' as const },
    sauceLabsBoltTShirt: { strategy: 'css' as const, value: '#item_1_title_link', actionKind: 'link' as const },
    addToCartSauceLabsBoltTShirt: { strategy: 'css' as const, value: '#add-to-cart-sauce-labs-bolt-t-shirt', actionKind: 'button' as const },
    item5Img: { strategy: 'css' as const, value: '#item_5_img_link', actionKind: 'link' as const },
    sauceLabsFleeceJacket: { strategy: 'css' as const, value: '#item_5_title_link', actionKind: 'link' as const },
    addToCartSauceLabsFleeceJacket: { strategy: 'css' as const, value: '#add-to-cart-sauce-labs-fleece-jacket', actionKind: 'button' as const },
    item2Img: { strategy: 'css' as const, value: '#item_2_img_link', actionKind: 'link' as const },
    sauceLabsOnesie: { strategy: 'css' as const, value: '#item_2_title_link', actionKind: 'link' as const },
    addToCartSauceLabsOnesie: { strategy: 'css' as const, value: '#add-to-cart-sauce-labs-onesie', actionKind: 'button' as const },
    item3Img: { strategy: 'css' as const, value: '#item_3_img_link', actionKind: 'link' as const },
    testAllTheThingsTShirtRed: { strategy: 'css' as const, value: '#item_3_title_link', actionKind: 'link' as const },
    addToCartTestAllthethingsTShirtRed: { strategy: 'css' as const, value: '#add-to-cart-test.allthethings()-t-shirt-(red)', actionKind: 'button' as const },
    twitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    facebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    linkedIn: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickOpenMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async doubleClickOpenMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async expectOpenMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.openMenu), expected, timeoutMs);
  }

  async expectOpenMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.openMenu), substring, timeoutMs);
  }

  async scrollOpenMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async getInnerTextProducts(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.products));
  }

  async expectProductsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.products), timeoutMs);
  }

  async expectProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.products), timeoutMs);
  }

  async expectProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.products), expected, timeoutMs);
  }

  async expectProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.products), substring, timeoutMs);
  }

  async scrollProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.products));
  }

  async getInnerTextNameAToZ(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.nameAToZ));
  }

  async expectNameAToZVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.nameAToZ), timeoutMs);
  }

  async expectNameAToZHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.nameAToZ), timeoutMs);
  }

  async expectNameAToZText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.nameAToZ), expected, timeoutMs);
  }

  async expectNameAToZContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.nameAToZ), substring, timeoutMs);
  }

  async scrollNameAToZIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.nameAToZ));
  }

  async selectNameAToZ2(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, InventoryPage.L.nameAToZ2), value);
  }

  async expectNameAToZ2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.nameAToZ2), timeoutMs);
  }

  async expectNameAToZ2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.nameAToZ2), timeoutMs);
  }

  async expectNameAToZ2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.nameAToZ2), timeoutMs);
  }

  async expectNameAToZ2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.nameAToZ2), timeoutMs);
  }

  async expectNameAToZ2Value(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.nameAToZ2), expected, timeoutMs);
  }

  async expectNameAToZ2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.nameAToZ2), timeoutMs);
  }

  async scrollNameAToZ2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.nameAToZ2));
  }

  async clickItem4Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async doubleClickItem4Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async expectItem4ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item4Img), expected, timeoutMs);
  }

  async expectItem4ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item4Img), substring, timeoutMs);
  }

  async scrollItem4ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async clickSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBackpack));
  }

  async doubleClickSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBackpack));
  }

  async expectSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.sauceLabsBackpack), expected, timeoutMs);
  }

  async expectSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.sauceLabsBackpack), substring, timeoutMs);
  }

  async scrollSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBackpack));
  }

  async clickAddToCartSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack));
  }

  async doubleClickAddToCartSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), substring, timeoutMs);
  }

  async scrollAddToCartSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack));
  }

  async clickItem0Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async doubleClickItem0Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async expectItem0ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item0Img), expected, timeoutMs);
  }

  async expectItem0ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item0Img), substring, timeoutMs);
  }

  async scrollItem0ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async clickSauceLabsBikeLight(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight));
  }

  async doubleClickSauceLabsBikeLight(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight));
  }

  async expectSauceLabsBikeLightVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight), expected, timeoutMs);
  }

  async expectSauceLabsBikeLightContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight), substring, timeoutMs);
  }

  async scrollSauceLabsBikeLightIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight));
  }

  async clickAddToCartSauceLabsBikeLight(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight));
  }

  async doubleClickAddToCartSauceLabsBikeLight(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight));
  }

  async expectAddToCartSauceLabsBikeLightVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), substring, timeoutMs);
  }

  async scrollAddToCartSauceLabsBikeLightIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight));
  }

  async clickItem1Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async doubleClickItem1Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async expectItem1ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item1Img), expected, timeoutMs);
  }

  async expectItem1ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item1Img), substring, timeoutMs);
  }

  async scrollItem1ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async clickSauceLabsBoltTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt));
  }

  async doubleClickSauceLabsBoltTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt));
  }

  async expectSauceLabsBoltTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt), timeoutMs);
  }

  async expectSauceLabsBoltTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt), timeoutMs);
  }

  async expectSauceLabsBoltTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt), expected, timeoutMs);
  }

  async expectSauceLabsBoltTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt), substring, timeoutMs);
  }

  async scrollSauceLabsBoltTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt));
  }

  async clickAddToCartSauceLabsBoltTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt));
  }

  async doubleClickAddToCartSauceLabsBoltTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt));
  }

  async expectAddToCartSauceLabsBoltTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), substring, timeoutMs);
  }

  async scrollAddToCartSauceLabsBoltTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt));
  }

  async clickItem5Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async doubleClickItem5Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async expectItem5ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item5Img), expected, timeoutMs);
  }

  async expectItem5ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item5Img), substring, timeoutMs);
  }

  async scrollItem5ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async clickSauceLabsFleeceJacket(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket));
  }

  async doubleClickSauceLabsFleeceJacket(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket));
  }

  async expectSauceLabsFleeceJacketVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket), timeoutMs);
  }

  async expectSauceLabsFleeceJacketHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket), timeoutMs);
  }

  async expectSauceLabsFleeceJacketText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket), expected, timeoutMs);
  }

  async expectSauceLabsFleeceJacketContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket), substring, timeoutMs);
  }

  async scrollSauceLabsFleeceJacketIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket));
  }

  async clickAddToCartSauceLabsFleeceJacket(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket));
  }

  async doubleClickAddToCartSauceLabsFleeceJacket(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket));
  }

  async expectAddToCartSauceLabsFleeceJacketVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), substring, timeoutMs);
  }

  async scrollAddToCartSauceLabsFleeceJacketIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket));
  }

  async clickItem2Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async doubleClickItem2Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async expectItem2ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item2Img), expected, timeoutMs);
  }

  async expectItem2ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item2Img), substring, timeoutMs);
  }

  async scrollItem2ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async clickSauceLabsOnesie(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsOnesie));
  }

  async doubleClickSauceLabsOnesie(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsOnesie));
  }

  async expectSauceLabsOnesieVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.sauceLabsOnesie), timeoutMs);
  }

  async expectSauceLabsOnesieHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.sauceLabsOnesie), timeoutMs);
  }

  async expectSauceLabsOnesieText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.sauceLabsOnesie), expected, timeoutMs);
  }

  async expectSauceLabsOnesieContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.sauceLabsOnesie), substring, timeoutMs);
  }

  async scrollSauceLabsOnesieIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsOnesie));
  }

  async clickAddToCartSauceLabsOnesie(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie));
  }

  async doubleClickAddToCartSauceLabsOnesie(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie));
  }

  async expectAddToCartSauceLabsOnesieVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), substring, timeoutMs);
  }

  async scrollAddToCartSauceLabsOnesieIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie));
  }

  async clickItem3Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async doubleClickItem3Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async expectItem3ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item3Img), expected, timeoutMs);
  }

  async expectItem3ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item3Img), substring, timeoutMs);
  }

  async scrollItem3ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async clickTestAllTheThingsTShirtRed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed));
  }

  async doubleClickTestAllTheThingsTShirtRed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed));
  }

  async expectTestAllTheThingsTShirtRedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed), timeoutMs);
  }

  async expectTestAllTheThingsTShirtRedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed), timeoutMs);
  }

  async expectTestAllTheThingsTShirtRedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed), expected, timeoutMs);
  }

  async expectTestAllTheThingsTShirtRedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed), substring, timeoutMs);
  }

  async scrollTestAllTheThingsTShirtRedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed));
  }

  async clickAddToCartTestAllthethingsTShirtRed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed));
  }

  async doubleClickAddToCartTestAllthethingsTShirtRed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed));
  }

  async expectAddToCartTestAllthethingsTShirtRedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), expected, timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), substring, timeoutMs);
  }

  async scrollAddToCartTestAllthethingsTShirtRedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed));
  }

  async clickTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.twitter));
  }

  async doubleClickTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.twitter));
  }

  async expectTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.twitter), timeoutMs);
  }

  async expectTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.twitter), timeoutMs);
  }

  async expectTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.twitter), expected, timeoutMs);
  }

  async expectTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.twitter), substring, timeoutMs);
  }

  async scrollTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.twitter));
  }

  async clickFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.facebook));
  }

  async doubleClickFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.facebook));
  }

  async expectFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.facebook), timeoutMs);
  }

  async expectFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.facebook), timeoutMs);
  }

  async expectFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.facebook), expected, timeoutMs);
  }

  async expectFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.facebook), substring, timeoutMs);
  }

  async scrollFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.facebook));
  }

  async clickLinkedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.linkedIn));
  }

  async doubleClickLinkedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.linkedIn));
  }

  async expectLinkedInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.linkedIn), expected, timeoutMs);
  }

  async expectLinkedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.linkedIn), substring, timeoutMs);
  }

  async scrollLinkedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.linkedIn));
  }


  async longPressOpenMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async expectOpenMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.openMenu), value, timeoutMs);
  }

  async expectOpenMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.openMenu), count, timeoutMs);
  }

  async clickProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.products));
  }

  async doubleClickProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.products));
  }

  async longPressProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.products));
  }

  async expectProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.products), value, timeoutMs);
  }

  async expectProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.products), timeoutMs);
  }

  async expectProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.products), timeoutMs);
  }

  async expectProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.products), timeoutMs);
  }

  async expectProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.products), timeoutMs);
  }

  async expectProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.products), timeoutMs);
  }

  async expectProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.products), count, timeoutMs);
  }

  async clickNameAToZ(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.nameAToZ));
  }

  async doubleClickNameAToZ(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.nameAToZ));
  }

  async longPressNameAToZ(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.nameAToZ));
  }

  async expectNameAToZValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.nameAToZ), value, timeoutMs);
  }

  async expectNameAToZEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.nameAToZ), timeoutMs);
  }

  async expectNameAToZDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.nameAToZ), timeoutMs);
  }

  async expectNameAToZChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.nameAToZ), timeoutMs);
  }

  async expectNameAToZUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.nameAToZ), timeoutMs);
  }

  async expectNameAToZFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.nameAToZ), timeoutMs);
  }

  async expectNameAToZCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.nameAToZ), count, timeoutMs);
  }

  async expectNameAToZ2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.nameAToZ2), expected, timeoutMs);
  }

  async expectNameAToZ2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.nameAToZ2), substring, timeoutMs);
  }

  async expectNameAToZ2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.nameAToZ2), timeoutMs);
  }

  async expectNameAToZ2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.nameAToZ2), timeoutMs);
  }

  async expectNameAToZ2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.nameAToZ2), count, timeoutMs);
  }

  async longPressItem4Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async expectItem4ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item4Img), value, timeoutMs);
  }

  async expectItem4ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item4Img), count, timeoutMs);
  }

  async longPressSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBackpack));
  }

  async expectSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.sauceLabsBackpack), value, timeoutMs);
  }

  async expectSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.sauceLabsBackpack), count, timeoutMs);
  }

  async longPressAddToCartSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), value, timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), count, timeoutMs);
  }

  async longPressItem0Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async expectItem0ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item0Img), value, timeoutMs);
  }

  async expectItem0ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item0Img), count, timeoutMs);
  }

  async longPressSauceLabsBikeLight(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight));
  }

  async expectSauceLabsBikeLightValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight), value, timeoutMs);
  }

  async expectSauceLabsBikeLightEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.sauceLabsBikeLight), count, timeoutMs);
  }

  async longPressAddToCartSauceLabsBikeLight(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight));
  }

  async expectAddToCartSauceLabsBikeLightValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), value, timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), count, timeoutMs);
  }

  async longPressItem1Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async expectItem1ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item1Img), value, timeoutMs);
  }

  async expectItem1ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item1Img), count, timeoutMs);
  }

  async longPressSauceLabsBoltTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt));
  }

  async expectSauceLabsBoltTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt), value, timeoutMs);
  }

  async expectSauceLabsBoltTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt), timeoutMs);
  }

  async expectSauceLabsBoltTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt), timeoutMs);
  }

  async expectSauceLabsBoltTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt), timeoutMs);
  }

  async expectSauceLabsBoltTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt), timeoutMs);
  }

  async expectSauceLabsBoltTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt), timeoutMs);
  }

  async expectSauceLabsBoltTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.sauceLabsBoltTShirt), count, timeoutMs);
  }

  async longPressAddToCartSauceLabsBoltTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt));
  }

  async expectAddToCartSauceLabsBoltTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), value, timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), count, timeoutMs);
  }

  async longPressItem5Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async expectItem5ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item5Img), value, timeoutMs);
  }

  async expectItem5ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item5Img), count, timeoutMs);
  }

  async longPressSauceLabsFleeceJacket(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket));
  }

  async expectSauceLabsFleeceJacketValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket), value, timeoutMs);
  }

  async expectSauceLabsFleeceJacketEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket), timeoutMs);
  }

  async expectSauceLabsFleeceJacketDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket), timeoutMs);
  }

  async expectSauceLabsFleeceJacketChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket), timeoutMs);
  }

  async expectSauceLabsFleeceJacketUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket), timeoutMs);
  }

  async expectSauceLabsFleeceJacketFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket), timeoutMs);
  }

  async expectSauceLabsFleeceJacketCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.sauceLabsFleeceJacket), count, timeoutMs);
  }

  async longPressAddToCartSauceLabsFleeceJacket(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket));
  }

  async expectAddToCartSauceLabsFleeceJacketValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), value, timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), count, timeoutMs);
  }

  async longPressItem2Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async expectItem2ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item2Img), value, timeoutMs);
  }

  async expectItem2ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item2Img), count, timeoutMs);
  }

  async longPressSauceLabsOnesie(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.sauceLabsOnesie));
  }

  async expectSauceLabsOnesieValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.sauceLabsOnesie), value, timeoutMs);
  }

  async expectSauceLabsOnesieEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.sauceLabsOnesie), timeoutMs);
  }

  async expectSauceLabsOnesieDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.sauceLabsOnesie), timeoutMs);
  }

  async expectSauceLabsOnesieChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.sauceLabsOnesie), timeoutMs);
  }

  async expectSauceLabsOnesieUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.sauceLabsOnesie), timeoutMs);
  }

  async expectSauceLabsOnesieFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.sauceLabsOnesie), timeoutMs);
  }

  async expectSauceLabsOnesieCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.sauceLabsOnesie), count, timeoutMs);
  }

  async longPressAddToCartSauceLabsOnesie(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie));
  }

  async expectAddToCartSauceLabsOnesieValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), value, timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), count, timeoutMs);
  }

  async longPressItem3Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async expectItem3ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item3Img), value, timeoutMs);
  }

  async expectItem3ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item3Img), count, timeoutMs);
  }

  async longPressTestAllTheThingsTShirtRed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed));
  }

  async expectTestAllTheThingsTShirtRedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed), value, timeoutMs);
  }

  async expectTestAllTheThingsTShirtRedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed), timeoutMs);
  }

  async expectTestAllTheThingsTShirtRedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed), timeoutMs);
  }

  async expectTestAllTheThingsTShirtRedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed), timeoutMs);
  }

  async expectTestAllTheThingsTShirtRedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed), timeoutMs);
  }

  async expectTestAllTheThingsTShirtRedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed), timeoutMs);
  }

  async expectTestAllTheThingsTShirtRedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.testAllTheThingsTShirtRed), count, timeoutMs);
  }

  async longPressAddToCartTestAllthethingsTShirtRed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed));
  }

  async expectAddToCartTestAllthethingsTShirtRedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), value, timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), count, timeoutMs);
  }

  async longPressTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.twitter));
  }

  async expectTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.twitter), value, timeoutMs);
  }

  async expectTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.twitter), timeoutMs);
  }

  async expectTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.twitter), timeoutMs);
  }

  async expectTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.twitter), timeoutMs);
  }

  async expectTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.twitter), timeoutMs);
  }

  async expectTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.twitter), timeoutMs);
  }

  async expectTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.twitter), count, timeoutMs);
  }

  async longPressFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.facebook));
  }

  async expectFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.facebook), value, timeoutMs);
  }

  async expectFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.facebook), timeoutMs);
  }

  async expectFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.facebook), timeoutMs);
  }

  async expectFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.facebook), timeoutMs);
  }

  async expectFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.facebook), timeoutMs);
  }

  async expectFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.facebook), timeoutMs);
  }

  async expectFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.facebook), count, timeoutMs);
  }

  async longPressLinkedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.linkedIn));
  }

  async expectLinkedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.linkedIn), value, timeoutMs);
  }

  async expectLinkedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.linkedIn), count, timeoutMs);
  }

}
