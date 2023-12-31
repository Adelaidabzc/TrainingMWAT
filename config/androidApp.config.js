
const config = require('./wdio.conf.js').config;

// ====================
// Capabilities Android
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: 'Android',
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    'appium:deviceName': 'Pixel 4',
    'appium:platformVersion': '11.0',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    // The path to the app
    // 'appium:app': join(process.cwd(), './app/app.apk'),
    'appium:app': config.paths.android,
    // 'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    'appium:noReset': false,
    'appium:noSign': true,
    'appium:autoGrantPermissions': true,
    // 'appium:newCommandTimeout': 240,

    //To automate webview in the app this is necessary
    //https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md
    // chromedriverExecutableDir: config.rootPath + '/chromedriver',
  }
];
config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;