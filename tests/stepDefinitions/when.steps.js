const {When} = require("@cucumber/cucumber");
let utils = require('../utils/utils.js')

const LoginPage = require('./../pages/login.page');

const loginPage = new LoginPage();

const SignUpPage = require('./../pages/signup.page');

const signUpPage = new SignUpPage();

// @androidApp
When(/^I enter valid credentials$/, async () => {
    await loginPage.login(utils.Credentials.email,utils.Credentials.password);
});

// @androidApp
When(/^I signup with new valid credentials$/, async () => {
    await signUpPage.signUp();
});

// @androidApp
When(/^I login with invalid credentials (\w+) and (.+)$/, async (email,password) => {
    await loginPage.login(email,password);
});

// @androidApp
When(/^I signup with invalid credentials (\w+) and (.+)$/, async (email,password) => {
    await signUpPage.invalidsignUp(email,password);
});
