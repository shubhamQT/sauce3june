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

export class CheckoutStepTwoPage {
  private static readonly L = {
    openMenu: { strategy: 'css' as const, value: '#react-burger-menu-btn', actionKind: 'button' as const },
    a: { strategy: 'role' as const, value: '1', role: 'link', actionKind: 'link' as const },
    checkoutOverview: { strategy: 'text' as const, value: 'Checkout: Overview', actionKind: 'text' as const },
    sauceLabsBackpack: { strategy: 'css' as const, value: '#item_4_title_link', actionKind: 'link' as const },
    cancel: { strategy: 'css' as const, value: '#cancel', actionKind: 'button' as const },
    finish: { strategy: 'css' as const, value: '#finish', actionKind: 'button' as const },
    twitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    facebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    linkedIn: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickOpenMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.openMenu));
  }

  async doubleClickOpenMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.openMenu));
  }

  async expectOpenMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), expected, timeoutMs);
  }

  async expectOpenMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), substring, timeoutMs);
  }

  async scrollOpenMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.openMenu));
  }

  async clickA(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.a));
  }

  async doubleClickA(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.a));
  }

  async expectAVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.a), timeoutMs);
  }

  async expectAHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.a), timeoutMs);
  }

  async expectAText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.a), expected, timeoutMs);
  }

  async expectAContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.a), substring, timeoutMs);
  }

  async scrollAIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.a));
  }

  async getInnerTextCheckoutOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview));
  }

  async expectCheckoutOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), expected, timeoutMs);
  }

  async expectCheckoutOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), substring, timeoutMs);
  }

  async scrollCheckoutOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview));
  }

  async clickSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack));
  }

  async doubleClickSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack));
  }

  async expectSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), expected, timeoutMs);
  }

  async expectSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), substring, timeoutMs);
  }

  async scrollSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack));
  }

  async clickCancel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.cancel));
  }

  async doubleClickCancel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.cancel));
  }

  async expectCancelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.cancel), timeoutMs);
  }

  async expectCancelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.cancel), timeoutMs);
  }

  async expectCancelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.cancel), timeoutMs);
  }

  async expectCancelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.cancel), timeoutMs);
  }

  async expectCancelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.cancel), expected, timeoutMs);
  }

  async expectCancelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.cancel), substring, timeoutMs);
  }

  async scrollCancelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.cancel));
  }

  async clickFinish(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.finish));
  }

  async doubleClickFinish(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.finish));
  }

  async expectFinishVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.finish), timeoutMs);
  }

  async expectFinishHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.finish), timeoutMs);
  }

  async expectFinishEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.finish), timeoutMs);
  }

  async expectFinishDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.finish), timeoutMs);
  }

  async expectFinishText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.finish), expected, timeoutMs);
  }

  async expectFinishContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.finish), substring, timeoutMs);
  }

  async scrollFinishIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.finish));
  }

  async clickTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.twitter));
  }

  async doubleClickTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.twitter));
  }

  async expectTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.twitter), timeoutMs);
  }

  async expectTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.twitter), timeoutMs);
  }

  async expectTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.twitter), expected, timeoutMs);
  }

  async expectTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.twitter), substring, timeoutMs);
  }

  async scrollTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.twitter));
  }

  async clickFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.facebook));
  }

  async doubleClickFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.facebook));
  }

  async expectFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.facebook), timeoutMs);
  }

  async expectFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.facebook), timeoutMs);
  }

  async expectFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.facebook), expected, timeoutMs);
  }

  async expectFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.facebook), substring, timeoutMs);
  }

  async scrollFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.facebook));
  }

  async clickLinkedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn));
  }

  async doubleClickLinkedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn));
  }

  async expectLinkedInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), expected, timeoutMs);
  }

  async expectLinkedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), substring, timeoutMs);
  }

  async scrollLinkedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn));
  }


  async longPressOpenMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.openMenu));
  }

  async expectOpenMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), value, timeoutMs);
  }

  async expectOpenMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), count, timeoutMs);
  }

  async longPressA(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.a));
  }

  async expectAValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.a), value, timeoutMs);
  }

  async expectAEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.a), timeoutMs);
  }

  async expectADisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.a), timeoutMs);
  }

  async expectAChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.a), timeoutMs);
  }

  async expectAUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.a), timeoutMs);
  }

  async expectAFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.a), timeoutMs);
  }

  async expectACount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.a), count, timeoutMs);
  }

  async clickCheckoutOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview));
  }

  async doubleClickCheckoutOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview));
  }

  async longPressCheckoutOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview));
  }

  async expectCheckoutOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), value, timeoutMs);
  }

  async expectCheckoutOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), count, timeoutMs);
  }

  async longPressSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack));
  }

  async expectSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), value, timeoutMs);
  }

  async expectSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), count, timeoutMs);
  }

  async longPressCancel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.cancel));
  }

  async expectCancelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.cancel), value, timeoutMs);
  }

  async expectCancelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.cancel), timeoutMs);
  }

  async expectCancelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.cancel), timeoutMs);
  }

  async expectCancelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.cancel), timeoutMs);
  }

  async expectCancelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.cancel), count, timeoutMs);
  }

  async longPressFinish(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.finish));
  }

  async expectFinishValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.finish), value, timeoutMs);
  }

  async expectFinishChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.finish), timeoutMs);
  }

  async expectFinishUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.finish), timeoutMs);
  }

  async expectFinishFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.finish), timeoutMs);
  }

  async expectFinishCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.finish), count, timeoutMs);
  }

  async longPressTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.twitter));
  }

  async expectTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.twitter), value, timeoutMs);
  }

  async expectTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.twitter), timeoutMs);
  }

  async expectTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.twitter), timeoutMs);
  }

  async expectTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.twitter), timeoutMs);
  }

  async expectTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.twitter), timeoutMs);
  }

  async expectTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.twitter), timeoutMs);
  }

  async expectTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.twitter), count, timeoutMs);
  }

  async longPressFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.facebook));
  }

  async expectFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.facebook), value, timeoutMs);
  }

  async expectFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.facebook), timeoutMs);
  }

  async expectFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.facebook), timeoutMs);
  }

  async expectFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.facebook), timeoutMs);
  }

  async expectFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.facebook), timeoutMs);
  }

  async expectFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.facebook), timeoutMs);
  }

  async expectFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.facebook), count, timeoutMs);
  }

  async longPressLinkedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn));
  }

  async expectLinkedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), value, timeoutMs);
  }

  async expectLinkedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), count, timeoutMs);
  }

}
