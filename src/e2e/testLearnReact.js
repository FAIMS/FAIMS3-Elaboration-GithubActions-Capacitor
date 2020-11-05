const wd = require('wd');
const assert = require('assert');
const asserters = wd.asserters;

const desiredCaps = {
    // Set your BrowserStack access credentials

    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,

    // Set URL of the application under test
    // https://www.browserstack.com/docs/app-automate/appium/upload-app-define-custom-id
    'app': 'ElaborationApp',

    // Specify device and os_version for testing
    'device': 'Google Pixel 3',
    'os_version': '9.0',
    // 'browserstack.appium_version': '1.6.5',
    // 'appium_version': '1.6.5',
    // Set other BrowserStack capabilities
    // You need to invoke the browserstack/github-actions/setup-env@master GitHub Action also in the job where test scripts will run because this Action sets up the environment variables BROWSERSTACK_USERNAME, BROWSERSTACK_ACCESS_KEY, BROWSERSTACK_BUILD_NAME and BROWSERSTACK_PROJECT_NAME, which are to be used in your test scripts

    'project': 'Elaboration Github Workflow',
    'build': 'Node Android BBS',
    'name': 'bbs_first_test',
    'debug': true
};

console.log(desiredCaps['browserstack.user'])

// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
const driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");

driver.setImplicitWaitTimeout(5000);
// http://appium.io/docs/en/commands/session/timeouts/implicit-wait/
driver
    .init(desiredCaps)
    .then(function () {
        return driver.waitForElementByAccessibilityId(
            'Learn React', asserters.isDisplayed
        && asserters.isEnabled, 30000);
    })
    .then(function (learnReact) {
        return assert.notStrictEqual(learnReact.getAttribute("className"), 'App-link')
    })
    .then(function (learnReact) {
        return assert.notStrictEqual('bad', 'App-link')
    })
    
    .fin(function () {
        return driver.quit();
    })
    .done();
