# FAIMS3-Elaboration-GithubActions-Capacitor

[![Github Action Status](https://github.com/FAIMS/FAIMS3-Elaboration-GithubActions-Capacitor-React/workflows/Compile%20APK,%20Electron,%20and%20Test%20on%20BrowserStack/badge.svg)](https://github.com/FAIMS/FAIMS3-Elaboration-GithubActions-Capacitor-React/actions)

[![BrowserStack Status](https://app-automate.browserstack.com/badge.svg?badge_key=RGgvZ0ZydzFQUXRJd21IYU0rRkFzU09JT3MxNjNkem95ZisrTzBOenk2TT0tLVBuMkNIdWIrU2hvR2JtUG9vbUttSkE9PQ==--946416f8d98dead7fd640032a92be25a4484d160)](https://app-automate.browserstack.com/builds/7ed91c644c5c9f74788e61dfc8c2b4fbb2a3a061/sessions/94f101a73706d9e5fef2a716bbc20778fea396e8?auth_token=cbeae8a23cec7a6ab6bef3724cc9be6ddf70ace9a699de7b48cbf7d93461751f)

See the action workflow at: https://github.com/FAIMS/FAIMS3-Elaboration-GithubActions-Capacitor-React/actions

See a sample browserstack output dashboard at: https://app-automate.browserstack.com/builds/7ed91c644c5c9f74788e61dfc8c2b4fbb2a3a061/sessions/94f101a73706d9e5fef2a716bbc20778fea396e8?auth_token=cbeae8a23cec7a6ab6bef3724cc9be6ddf70ace9a699de7b48cbf7d93461751f

## Authors

* Brian Ballsun-Stanton, Macquarie University
* Rini Angreani, CSIRO

## License

GPL v3 (Though it really should be the [CRAPL](http://matt.might.net/articles/crapl/))

## Works Consulted

* Project Setup: https://web.archive.org/web/https://www.thepolyglotdeveloper.com/2018/06/getting-started-capacitor-using-react/
* Electron stapled in: https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3
* BrowserStack Documentation: https://www.browserstack.com/docs/automate/selenium/github-actions
    * Setting up github actions: https://www.browserstack.com/docs/automate/selenium/github-actions#set-up-a-github-workflow-to-run-browserstack-tests
    * App-Automate for Travis documentation: https://www.browserstack.com/docs/app-automate/appium/integrations/travis-ci (It's fairly portable in terms of actions app-automate expects)
    * **Critical** Don't forget to set up a CustomID for your APK. It is extremely tedious otherwise.
* Github Actions:
    - Encrypted Secrets https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets
    - Workflow Commands https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-commands-for-github-actions