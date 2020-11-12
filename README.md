# FAIMS3-Elaboration-GithubActions-Capacitor

[![Github Action Status](https://github.com/FAIMS/FAIMS3-Elaboration-GithubActions-Capacitor-React/workflows/Compile%20APK,%20Electron,%20and%20Test%20on%20BrowserStack/badge.svg)](https://github.com/FAIMS/FAIMS3-Elaboration-GithubActions-Capacitor-React/actions)

[![BrowserStack Status](https://app-automate.browserstack.com/badge.svg?badge_key=RGgvZ0ZydzFQUXRJd21IYU0rRkFzU09JT3MxNjNkem95ZisrTzBOenk2TT0tLVBuMkNIdWIrU2hvR2JtUG9vbUttSkE9PQ==--946416f8d98dead7fd640032a92be25a4484d160)](https://app-automate.browserstack.com/public-build/RGgvZ0ZydzFQUXRJd21IYU0rRkFzU09JT3MxNjNkem95ZisrTzBOenk2TT0tLVBuMkNIdWIrU2hvR2JtUG9vbUttSkE9PQ==--946416f8d98dead7fd640032a92be25a4484d160)

See the action workflow at: https://github.com/FAIMS/FAIMS3-Elaboration-GithubActions-Capacitor-React/actions

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