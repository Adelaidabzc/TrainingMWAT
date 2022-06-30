require('chai').should();
const Chance = require('chance');
let utils = require('../utils/utils.js')
const chance = new Chance();


const SELECTORS = {
    ANDROID: {
        emailTextField: '//android.widget.EditText[@password="false"]',
        passwordTextField: '//android.widget.EditText[@password="true"]',
        firstNameTextField: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.EditText',
        submitButton: '//android.widget.LinearLayout[@resource-id="com.shakey.nyarchives.qa:id/com_auth0_lock_labeled"]',
        signupTabButton: '//androidx.appcompat.app.ActionBar.Tab[@content-desc="Sign Up"]',
        errorMessage: '//android.widget.TextView[@text="Invalid Email Address"]'
    },
}

class SignUpPage {

    get emailTextField() {
        return $(SELECTORS[utils.platformName].emailTextField)
    }
    get passwordTextField() {
        return $(SELECTORS[utils.platformName].passwordTextField)
    }
    get submitButton() {
        return $(SELECTORS[utils.platformName].submitButton)
    }
    get firstNameTextField() {
        return $(SELECTORS[utils.platformName].firstNameTextField)
    }
    get signupTabButton() {
        return $(SELECTORS[utils.platformName].signupTabButton)
    }
    get errorMessage() {
        return $(SELECTORS[utils.platformName].errorMessage)
    }

    async signUp(){
        await (await this.emailTextField).waitForDisplayed()
        await (await this.emailTextField).clearValue()
        await (await this.emailTextField).addValue(chance.email())
        await (await this.passwordTextField).waitForDisplayed()
        await (await this.passwordTextField).clearValue()
        await (await this.passwordTextField).addValue(utils.password)
        await (await this.firstNameTextField).waitForDisplayed()
        await (await this.firstNameTextField).clearValue()
        await (await this.firstNameTextField).addValue(utils.firstName)
        await (await this.submitButton).waitForDisplayed()
        await (await this.submitButton).click()
    }

    async invalidsignUp(email,password){
        await (await this.emailTextField).waitForDisplayed()
        await (await this.emailTextField).clearValue()
        await (await this.emailTextField).addValue(email)
        await (await this.passwordTextField).waitForDisplayed()
        await (await this.passwordTextField).clearValue()
        await (await this.passwordTextField).addValue(password)
        await (await this.firstNameTextField).waitForDisplayed()
        await (await this.firstNameTextField).clearValue()
        await (await this.firstNameTextField).addValue('12312312312')
        await (await this.submitButton).waitForDisplayed()
        await (await this.submitButton).click()
    }

    async launchApp() {
        await browser.pause(3000)
    }

    async goToSignUp() {
        await (await this.signupTabButton).waitForDisplayed()
        await (await this.signupTabButton).click()
    }
}

module.exports = SignUpPage;