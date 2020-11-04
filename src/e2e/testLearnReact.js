const wd = require('wd');
const assert = require('assert');
const asserters = wd.asserters;

const desiredCaps = {
    // Set your BrowserStack access credentials

    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
    'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER,

    // Set URL of the application under test
    // https://www.browserstack.com/docs/app-automate/appium/upload-app-define-custom-id
    'app': 'ElaborationApp',


    // Specify device and os_version for testing
    'device': 'Google Pixel 3',
    'os_version': '9.0',

    // Set other BrowserStack capabilities
    // You need to invoke the browserstack/github-actions/setup-env@master GitHub Action also in the job where test scripts will run because this Action sets up the environment variables BROWSERSTACK_USERNAME, BROWSERSTACK_ACCESS_KEY, BROWSERSTACK_BUILD_NAME and BROWSERSTACK_PROJECT_NAME, which are to be used in your test scripts

    'project': process.env.BROWSERSTACK_PROJECT_NAME,
    'build': process.env.BROWSERSTACK_BUILD_NAME,
    'name': 'bbs_first_test'
};

// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
const driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");

driver
    .init(desiredCaps)
    .then(function () {
        return driver.waitForElementByAccessibilityId(
            'Learn React', asserters.isDisplayed
        && asserters.isEnabled, 30000);
    })
    .then(function (learnReact) {
        return learnReact.click();
    })
    .then(function () {
        return driver.element('xpath', ("//*[@text='Chrome']"));
    })
    .then(function (chrome) {
        chrome.click();
        return chrome.click();
    })
    .then(function () {
        driver.setImplicitWaitTimeout(10000);
        return assert.notStrictEqual(driver.url(), 'reactjs.org');
    })
    .fin(function () {
        return driver.quit();
    })
    .done();
