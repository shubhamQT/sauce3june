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

export class CheckoutStepOnePage {
  private static readonly L = {
    openMenu: { strategy: 'css' as const, value: '#react-burger-menu-btn', actionKind: 'button' as const },
    a: { strategy: 'role' as const, value: '1', role: 'link', actionKind: 'link' as const },
    checkoutYourInformation: { strategy: 'text' as const, value: 'Checkout: Your Information', actionKind: 'text' as const },
    firstName: { strategy: 'css' as const, value: '#first-name', actionKind: 'textbox' as const },
    lastName: { strategy: 'css' as const, value: '#last-name', actionKind: 'textbox' as const },
    postalCode: { strategy: 'css' as const, value: '#postal-code', actionKind: 'textbox' as const },
    cancel: { strategy: 'css' as const, value: '#cancel', actionKind: 'button' as const },
    continue: { strategy: 'css' as const, value: '#continue', actionKind: 'generic' as const },
    twitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    facebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    linkedIn: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickOpenMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.openMenu));
  }

  async doubleClickOpenMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.openMenu));
  }

  async expectOpenMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.openMenu), expected, timeoutMs);
  }

  async expectOpenMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.openMenu), substring, timeoutMs);
  }

  async scrollOpenMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.openMenu));
  }

  async clickA(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.a));
  }

  async doubleClickA(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.a));
  }

  async expectAVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.a), timeoutMs);
  }

  async expectAHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.a), timeoutMs);
  }

  async expectAText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.a), expected, timeoutMs);
  }

  async expectAContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.a), substring, timeoutMs);
  }

  async scrollAIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.a));
  }

  async getInnerTextCheckoutYourInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation));
  }

  async expectCheckoutYourInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), expected, timeoutMs);
  }

  async expectCheckoutYourInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), substring, timeoutMs);
  }

  async scrollCheckoutYourInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation));
  }

  async fillFirstName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstName), value);
  }

  async clearFirstName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstName));
  }

  async typeTextFirstName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstName), value);
  }

  async expectFirstNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.firstName), expected, timeoutMs);
  }

  async expectFirstNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async scrollFirstNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstName));
  }

  async fillLastName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastName), value);
  }

  async clearLastName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastName));
  }

  async typeTextLastName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastName), value);
  }

  async expectLastNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.lastName), expected, timeoutMs);
  }

  async expectLastNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async scrollLastNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastName));
  }

  async fillPostalCode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalCode), value);
  }

  async clearPostalCode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalCode));
  }

  async typeTextPostalCode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalCode), value);
  }

  async expectPostalCodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.postalCode), expected, timeoutMs);
  }

  async expectPostalCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async scrollPostalCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalCode));
  }

  async clickCancel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.cancel));
  }

  async doubleClickCancel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.cancel));
  }

  async expectCancelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.cancel), expected, timeoutMs);
  }

  async expectCancelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.cancel), substring, timeoutMs);
  }

  async scrollCancelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.cancel));
  }

  async clickContinue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

  async doubleClickContinue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

  async expectContinueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.continue), expected, timeoutMs);
  }

  async expectContinueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.continue), substring, timeoutMs);
  }

  async scrollContinueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

  async clickTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.twitter));
  }

  async doubleClickTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.twitter));
  }

  async expectTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.twitter), expected, timeoutMs);
  }

  async expectTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.twitter), substring, timeoutMs);
  }

  async scrollTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.twitter));
  }

  async clickFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.facebook));
  }

  async doubleClickFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.facebook));
  }

  async expectFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.facebook), expected, timeoutMs);
  }

  async expectFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.facebook), substring, timeoutMs);
  }

  async scrollFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.facebook));
  }

  async clickLinkedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.linkedIn));
  }

  async doubleClickLinkedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.linkedIn));
  }

  async expectLinkedInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), expected, timeoutMs);
  }

  async expectLinkedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), substring, timeoutMs);
  }

  async scrollLinkedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.linkedIn));
  }


  async longPressOpenMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.openMenu));
  }

  async expectOpenMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.openMenu), value, timeoutMs);
  }

  async expectOpenMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.openMenu), count, timeoutMs);
  }

  async longPressA(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.a));
  }

  async expectAValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.a), value, timeoutMs);
  }

  async expectAEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.a), timeoutMs);
  }

  async expectADisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.a), timeoutMs);
  }

  async expectAChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.a), timeoutMs);
  }

  async expectAUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.a), timeoutMs);
  }

  async expectAFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.a), timeoutMs);
  }

  async expectACount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.a), count, timeoutMs);
  }

  async clickCheckoutYourInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation));
  }

  async doubleClickCheckoutYourInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation));
  }

  async longPressCheckoutYourInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation));
  }

  async expectCheckoutYourInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), value, timeoutMs);
  }

  async expectCheckoutYourInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), count, timeoutMs);
  }

  async expectFirstNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.firstName), expected, timeoutMs);
  }

  async expectFirstNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.firstName), substring, timeoutMs);
  }

  async expectFirstNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.firstName), count, timeoutMs);
  }

  async expectLastNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.lastName), expected, timeoutMs);
  }

  async expectLastNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.lastName), substring, timeoutMs);
  }

  async expectLastNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.lastName), count, timeoutMs);
  }

  async expectPostalCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.postalCode), expected, timeoutMs);
  }

  async expectPostalCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.postalCode), substring, timeoutMs);
  }

  async expectPostalCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.postalCode), count, timeoutMs);
  }

  async longPressCancel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.cancel));
  }

  async expectCancelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.cancel), value, timeoutMs);
  }

  async expectCancelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.cancel), count, timeoutMs);
  }

  async longPressContinue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

  async expectContinueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.continue), value, timeoutMs);
  }

  async expectContinueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.continue), count, timeoutMs);
  }

  async longPressTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.twitter));
  }

  async expectTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.twitter), value, timeoutMs);
  }

  async expectTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.twitter), count, timeoutMs);
  }

  async longPressFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.facebook));
  }

  async expectFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.facebook), value, timeoutMs);
  }

  async expectFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.facebook), count, timeoutMs);
  }

  async longPressLinkedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.linkedIn));
  }

  async expectLinkedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), value, timeoutMs);
  }

  async expectLinkedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), count, timeoutMs);
  }

}
