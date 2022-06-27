const {Given} = require("@cucumber/cucumber");

const LoginPage = require('./../pages/login.page');

const loginPage = new LoginPage();

const SignUpPage = require('./../pages/signup.page');

const signUpPage = new SignUpPage();

const SettingsPage = require('./../pages/settings.page');

const settingsPage = new SettingsPage();


// @androidApp
Given(/^I launch the NYA app$/, async () => {
    await loginPage.launchApp();
});

// @iosApp
Given(/^I launch the settings app of iphone$/, async () => {
    await settingsPage.launchApp();
});

// @androidApp
Given(/^Im on the (\w+) page$/, async (page) => {
    
    switch (page) {
        case 'login':
            await loginPage.launchApp();
            break;
        case 'signup':
            await signUpPage.launchApp();
            await signUpPage.goToSignUp();
            break;
    
        default:
            break;
    }
});

