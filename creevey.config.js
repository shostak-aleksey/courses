const path = require('path');

module.exports = {
    // Specify custom Selenium Grid url (see usage below)
    // In most cases you don't need this option
    gridUrl: '<gridUrl>/wd/hub',

    // Default Storybook url
    storybookUrl: 'http://localhost:6006',

    // Storybook config directory
    storybookDir: path.join(__dirname, '.storybook'),

    // Where original images are stored
    screenDir: path.join(__dirname, '../images'),

    // Report directory that contains data from previous runs
    reportDir: path.join(__dirname, '../report'),

    // Pixelmatch options
    diffOptions: { threshold: 0.1 },

    // How many times test should be retried before to consider it as failed
    maxRetries: 2,

    // Describe browsers and their options
    browsers: {
    // Shorthand declarations of browsers
        chrome: true,
        ff: 'firefox',

        otherChrome: {
            browserName: 'chrome',
            // Define initial viewport size
            viewport: { width: 1024, height: 720 },
            // Increase parallel sessions
            limit: 2,
            /* Also you can define any browser capabilities here */
            version: '86.0',
            // It's possible to set Storybook's globals
            // https://github.com/storybookjs/storybook/blob/v6.0.0/docs/essentials/toolbars-and-globals.md
            // NOTE: This is an experimental feature and will be replaced in future
            _storybookGlobals: {
                myTheme: 'dark',
            },
        },

        // You can override some global options for specific browser
        ie11: {
            browserName: 'internet explorer',
            // Like user another Selenium Grid url
            gridUrl: '<anotherGridUrl>/wd/hub',
            // Or use different storybook instance
            storybookUrl: 'http://mystoryhost:6007',
            // And use you own docker image
            // By default Creevey will use selenoid image according browser name and version:
            // `selenoid/${browserName}:${version ?? 'latest'}` image
            dockerImage: 'microsoft/ie:11.0',
        },
    },

    // You may want to do something before tests started (for example start browserstack-local)
    hooks: {
        async before() {
            /* ... */
        },
        async after() {
            /* ... */
        },
    },
};
