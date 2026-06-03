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

export class LoginPage {
  private static readonly L = {
    userName: { strategy: 'css' as const, value: '#user-name', actionKind: 'textbox' as const },
    password: { strategy: 'css' as const, value: '#password', actionKind: 'textbox' as const },
    loginButton: { strategy: 'css' as const, value: '#login-button', actionKind: 'generic' as const },
    acceptedUsernamesAre: { strategy: 'text' as const, value: 'Accepted usernames are:', actionKind: 'text' as const },
    passwordForAllUsers: { strategy: 'text' as const, value: 'Password for all users:', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async fillUserName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.userName), value);
  }

  async clearUserName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.userName));
  }

  async typeTextUserName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.userName), value);
  }

  async expectUserNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async expectUserNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async expectUserNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async expectUserNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async expectUserNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.userName), expected, timeoutMs);
  }

  async expectUserNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async scrollUserNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.userName));
  }

  async fillPassword(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.password), value);
  }

  async clearPassword(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async typeTextPassword(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.password), value);
  }

  async expectPasswordVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.password), expected, timeoutMs);
  }

  async expectPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async scrollPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async clickLoginButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginButton));
  }

  async doubleClickLoginButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginButton));
  }

  async expectLoginButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginButton), expected, timeoutMs);
  }

  async expectLoginButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginButton), substring, timeoutMs);
  }

  async scrollLoginButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginButton));
  }

  async getInnerTextAcceptedUsernamesAre(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async expectAcceptedUsernamesAreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), expected, timeoutMs);
  }

  async expectAcceptedUsernamesAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), substring, timeoutMs);
  }

  async scrollAcceptedUsernamesAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async getInnerTextPasswordForAllUsers(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async expectPasswordForAllUsersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.passwordForAllUsers), expected, timeoutMs);
  }

  async expectPasswordForAllUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.passwordForAllUsers), substring, timeoutMs);
  }

  async scrollPasswordForAllUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async performLogin(username: string, password: string): Promise<void> {
    await this.fillUserName(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }


  async expectUserNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.userName), expected, timeoutMs);
  }

  async expectUserNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.userName), substring, timeoutMs);
  }

  async expectUserNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async expectUserNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async expectUserNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.userName), count, timeoutMs);
  }

  async expectPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.password), expected, timeoutMs);
  }

  async expectPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.password), substring, timeoutMs);
  }

  async expectPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.password), count, timeoutMs);
  }

  async longPressLoginButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.loginButton));
  }

  async expectLoginButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginButton), value, timeoutMs);
  }

  async expectLoginButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginButton), count, timeoutMs);
  }

  async clickAcceptedUsernamesAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async doubleClickAcceptedUsernamesAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async longPressAcceptedUsernamesAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async expectAcceptedUsernamesAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), value, timeoutMs);
  }

  async expectAcceptedUsernamesAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), count, timeoutMs);
  }

  async clickPasswordForAllUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async doubleClickPasswordForAllUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async longPressPasswordForAllUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async expectPasswordForAllUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.passwordForAllUsers), value, timeoutMs);
  }

  async expectPasswordForAllUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.passwordForAllUsers), count, timeoutMs);
  }

}
