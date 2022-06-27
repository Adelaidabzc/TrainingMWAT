const {Then} = require("@cucumber/cucumber");

const SettingsPage = require('./../pages/settings.page');

const settingsPage = new SettingsPage();

const SignUpPage = require('./../pages/signup.page');

const signUpPage = new SignUpPage();

const LoginPage = require('./../pages/login.page');

const loginPage = new LoginPage();

const HomePage = require('./../pages/home.page');

const homePage = new HomePage();

// @androidApp
Then(/^I should see the home page$/, async () => {
    await homePage.verifyLoginFirstTime()
});

// @androidApp
Then(/^I should see an error message$/, async () => {
    await loginPage.verifyErrorMessage()
});
