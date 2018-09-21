var pageObject

const createData = require("../test-assets/createData")
const createFunction = require("../test-assets/createFunction")

module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.pageObject()
        pageObject.navigate()
        .waitForElementVisible('@login', 5000)
    },
    after: browser => {
        browser.end()
    },

    'Create Rodeo': browser => {
        createData.valid.forEach(test => {
            createFunction(pageObject, test)
        })
    }
}