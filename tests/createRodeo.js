var pageObject
const createData = require("../test-assets/createData")
const case84 = require("../test-assets/case84")
const case85 = require("../test-assets/case85")
const case86 = require("../test-assets/case86")
const case87 = require("../test-assets/case87")
const case88 = require("../test-assets/case88")
const case89 = require("../test-assets/case89")

module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.pageObject()
        pageObject.navigate()
        .waitForElementVisible('@login', 5000)
    },
    after: browser => {
        browser.end()
    },
    //https://dmutah.atlassian.net/browse/Q7K-84
    'Create Rodeo w/o Registration w/o Category': browser => {
        createData.valid84.forEach(test => {
            case84(pageObject, test)
        })
    },
    //https://dmutah.atlassian.net/browse/Q7K-85
    'Create Rodeo w/o Registration w/ Category': browser => {
        createData.valid85.forEach(test => {
            case85(pageObject, test)
        })
    },
    //https://dmutah.atlassian.net/browse/Q7K-86
    'Create Rodeo w/o Registration w/ Category': browser => {
        createData.valid86.forEach(test => {
            case86(pageObject, test)
        })
    },
    //https://dmutah.atlassian.net/browse/Q7K-87
    'Create Rodeo w/o Registration w/ Category': browser => {
        createData.valid87.forEach(test => {
            case87(pageObject, test)
        })
    },
    //https://dmutah.atlassian.net/browse/Q7K-88
    'Create Rodeo w/o Registration w/ Category': browser => {
        createData.valid88.forEach(test => {
            case88(pageObject, test)
        })
    },
    //https://dmutah.atlassian.net/browse/Q7K-89
    'Create Rodeo w/o Registration w/ Category': browser => {
        createData.valid89.forEach(test => {
            case89(pageObject, test)
        })
    },

}