//https://dmutah.atlassian.net/browse/Q7K-89
//RODEO WITH REGISTRATION
//RODEO WITH WITHOUT CATEGORIES
//RODEO WITH NEW PAYEE

module.exports = (pageObject, rodeoInfo) => {
    pageObject
        //login, get to create rodeo form
        .click('@login')
        .waitForElementVisible('@username', 10000)
        .setValue('@username', rodeoInfo.username)
        .setValue('@password', rodeoInfo.password)
        .click('@loginButton')
        .click('@createRodeo')
        .click('@createNew')
        //name, where & when, basic rodeo info, contact info
        .setValue('@rodeoName', rodeoInfo.rodeoName)
        .setValue('@address', rodeoInfo.address)
        .setValue('@city', rodeoInfo.city)
        .click(rodeoInfo.state)
        .click(rodeoInfo.country)
        .setValue('@zip', rodeoInfo.zip)
        .click(rodeoInfo.timeZone)
        .setValue('@dateTime', rodeoInfo.dateTime)
        .api.frame('event-description_ifr')
    pageObject
        .setValue('@description', rodeoInfo.description)
        .api.frameParent()
    pageObject
        .setValue('@url', rodeoInfo.url)
        .setValue('@firstName', rodeoInfo.firstName)
        .setValue('@lastName', rodeoInfo.lastName)
        .setValue('@email', rodeoInfo.email)
        //registration ends
        .setValue('@regEnds', rodeoInfo.regEnds + pageObject.api.Keys.ENTER)
        .setValue('@waiver', rodeoInfo.waiver)
        //create new payee
        .click('@createPayee')
        .waitForElementPresent('@entityName', 1000)
        .setValue('@entityName', rodeoInfo.entityName)
        .waitForElementPresent('@payeeAddress', 5000)
        .setValue('@payeeAddress', rodeoInfo.payeeAddress)
        .setValue('@payeeCity', rodeoInfo.payeeCity)
        .click(rodeoInfo.payeeState)
        .setValue('@payeeZip', rodeoInfo.payeeZip)
        //click save
        .setValue('@initials', rodeoInfo.initials)
    pageObject
        .waitForElementVisible('@save', 10000)
        .click('@save')
        .api.pause(1000)
    pageObject
    // .expect.element('@venue').text.to.contain(rodeoInfo.rodeoName)
    // figure this out.
    pageObject.api.perform(function (done) {
        console.log('success')
        done()
    })
    pageObject.api.end()

}