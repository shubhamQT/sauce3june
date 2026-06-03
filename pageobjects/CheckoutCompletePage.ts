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

export class CheckoutCompletePage {
  private static readonly L = {
    openMenu: { strategy: 'css' as const, value: '#react-burger-menu-btn', actionKind: 'button' as const },
    checkoutComplete: { strategy: 'text' as const, value: 'Checkout: Complete!', actionKind: 'text' as const },
    thankYouForYour: { strategy: 'text' as const, value: 'Thank you for your order!', actionKind: 'text' as const },
    backToProducts: { strategy: 'css' as const, value: '#back-to-products', actionKind: 'button' as const },
    twitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    facebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    linkedIn: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickOpenMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.openMenu));
  }

  async doubleClickOpenMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.openMenu));
  }

  async expectOpenMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.openMenu), expected, timeoutMs);
  }

  async expectOpenMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.openMenu), substring, timeoutMs);
  }

  async scrollOpenMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.openMenu));
  }

  async getInnerTextCheckoutComplete(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete));
  }

  async expectCheckoutCompleteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete), timeoutMs);
  }

  async expectCheckoutCompleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete), timeoutMs);
  }

  async expectCheckoutCompleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete), expected, timeoutMs);
  }

  async expectCheckoutCompleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete), substring, timeoutMs);
  }

  async scrollCheckoutCompleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete));
  }

  async getInnerTextThankYouForYour(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour));
  }

  async expectThankYouForYourVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour), timeoutMs);
  }

  async expectThankYouForYourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour), timeoutMs);
  }

  async expectThankYouForYourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour), expected, timeoutMs);
  }

  async expectThankYouForYourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour), substring, timeoutMs);
  }

  async scrollThankYouForYourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour));
  }

  async clickBackToProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async doubleClickBackToProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async expectBackToProductsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.backToProducts), expected, timeoutMs);
  }

  async expectBackToProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.backToProducts), substring, timeoutMs);
  }

  async scrollBackToProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async clickTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.twitter));
  }

  async doubleClickTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.twitter));
  }

  async expectTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.twitter), timeoutMs);
  }

  async expectTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.twitter), timeoutMs);
  }

  async expectTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.twitter), expected, timeoutMs);
  }

  async expectTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.twitter), substring, timeoutMs);
  }

  async scrollTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.twitter));
  }

  async clickFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.facebook));
  }

  async doubleClickFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.facebook));
  }

  async expectFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.facebook), timeoutMs);
  }

  async expectFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.facebook), timeoutMs);
  }

  async expectFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.facebook), expected, timeoutMs);
  }

  async expectFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.facebook), substring, timeoutMs);
  }

  async scrollFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.facebook));
  }

  async clickLinkedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.linkedIn));
  }

  async doubleClickLinkedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.linkedIn));
  }

  async expectLinkedInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.linkedIn), expected, timeoutMs);
  }

  async expectLinkedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.linkedIn), substring, timeoutMs);
  }

  async scrollLinkedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.linkedIn));
  }


  async longPressOpenMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.openMenu));
  }

  async expectOpenMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.openMenu), value, timeoutMs);
  }

  async expectOpenMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.openMenu), count, timeoutMs);
  }

  async clickCheckoutComplete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete));
  }

  async doubleClickCheckoutComplete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete));
  }

  async longPressCheckoutComplete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete));
  }

  async expectCheckoutCompleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete), value, timeoutMs);
  }

  async expectCheckoutCompleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete), timeoutMs);
  }

  async expectCheckoutCompleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete), timeoutMs);
  }

  async expectCheckoutCompleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete), timeoutMs);
  }

  async expectCheckoutCompleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete), timeoutMs);
  }

  async expectCheckoutCompleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete), timeoutMs);
  }

  async expectCheckoutCompleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.checkoutComplete), count, timeoutMs);
  }

  async clickThankYouForYour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour));
  }

  async doubleClickThankYouForYour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour));
  }

  async longPressThankYouForYour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour));
  }

  async expectThankYouForYourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour), value, timeoutMs);
  }

  async expectThankYouForYourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour), timeoutMs);
  }

  async expectThankYouForYourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour), timeoutMs);
  }

  async expectThankYouForYourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour), timeoutMs);
  }

  async expectThankYouForYourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour), timeoutMs);
  }

  async expectThankYouForYourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour), timeoutMs);
  }

  async expectThankYouForYourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.thankYouForYour), count, timeoutMs);
  }

  async longPressBackToProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async expectBackToProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.backToProducts), value, timeoutMs);
  }

  async expectBackToProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.backToProducts), count, timeoutMs);
  }

  async longPressTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.twitter));
  }

  async expectTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.twitter), value, timeoutMs);
  }

  async expectTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.twitter), timeoutMs);
  }

  async expectTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.twitter), timeoutMs);
  }

  async expectTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.twitter), timeoutMs);
  }

  async expectTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.twitter), timeoutMs);
  }

  async expectTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.twitter), timeoutMs);
  }

  async expectTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.twitter), count, timeoutMs);
  }

  async longPressFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.facebook));
  }

  async expectFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.facebook), value, timeoutMs);
  }

  async expectFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.facebook), timeoutMs);
  }

  async expectFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.facebook), timeoutMs);
  }

  async expectFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.facebook), timeoutMs);
  }

  async expectFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.facebook), timeoutMs);
  }

  async expectFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.facebook), timeoutMs);
  }

  async expectFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.facebook), count, timeoutMs);
  }

  async longPressLinkedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.linkedIn));
  }

  async expectLinkedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.linkedIn), value, timeoutMs);
  }

  async expectLinkedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.linkedIn), count, timeoutMs);
  }

}
