let utils = require('../utils/utils.js')
require('chai').should();

const SELECTORS = {
    ANDROID: {
        nyaNewsLetterModalText: '//android.widget.TextView[@text="Would you like to receive newsletters from NYA?"]',
        
    },
}

class HomePage {

    get nyaNewsLetterModalText() {
        return $(SELECTORS[utils.platformName].nyaNewsLetterModalText)
    }

    async launchApp() {
        await browser.pause(2000)
    }

    async verifyLoginFirstTime() {
        await (await this.nyaNewsLetterModalText).waitForDisplayed()
        await (await (await this.nyaNewsLetterModalText).isDisplayed()).should.be.true        
        await browser.pause(2000)
    }
}

module.exports = HomePage;