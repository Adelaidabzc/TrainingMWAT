let utils = require('../utils/utils.js')
require('chai').should();

const SELECTORS = {
    ANDROID: {
        emailTextField: '//android.widget.EditText[@password="false"]',
        passwordTextField: '//android.widget.EditText[@password="true"]',
        submitButton: '//android.widget.LinearLayout[@resource-id="com.shakey.nyarchives.qa:id/com_auth0_lock_labeled"]',
        errorMessage: '//android.widget.TextView[@text="Invalid Email Address"]'
    },
}

class LoginPage {

    get emailTextField() {
        return $(SELECTORS[utils.platformName].emailTextField)
    }
    get passwordTextField() {
        return $(SELECTORS[utils.platformName].passwordTextField)
    }
    get submitButton() {
        return $(SELECTORS[utils.platformName].submitButton)
    }
    get errorMessage() {
        return $(SELECTORS[utils.platformName].errorMessage)
    }

    async launchApp() {
        await browser.pause(2000)
    }

    async login(email, password) {
        await (await this.emailTextField).waitForDisplayed()
        await (await this.emailTextField).clearValue()
        await (await this.emailTextField).addValue(email)
        await (await this.passwordTextField).waitForDisplayed()
        await (await this.passwordTextField).clearValue()
        await (await this.passwordTextField).addValue(password)
        await (await this.submitButton).click()
    }

    async verifyErrorMessage() {
        await (await this.errorMessage).waitForDisplayed()
        await (await (await this.errorMessage).waitForDisplayed()).should.be.true
    }
}

module.exports = LoginPage;