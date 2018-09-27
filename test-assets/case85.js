//https://dmutah.atlassian.net/browse/Q7K-84
//RODEO WITHOUT REGISTRATION
//RODEO WITH CATEGORIES
//RODEO WITHOUT PAYEE

module.exports = (pageObject, rodeoInfo) => {
    pageObject
        .click('@login')
        .waitForElementVisible('@username', 10000)
        .setValue('@username', rodeoInfo.username)
        .setValue('@password', rodeoInfo.password)
        .click('@loginButton')
        .click('@createRodeo')
        .click('@createNew')
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
        //takes away registration form
        .click('@createReg')
        .click('@addCategory')
        .setValue('@catName', rodeoInfo.catName)
        .setValue('@catIndPrice', rodeoInfo.catIndPrice)
        .setValue('@partLimit', rodeoInfo.partLimit)
        .setValue('@minAge', rodeoInfo.minAge)
        .setValue('@maxAge', rodeoInfo.maxAge)
        .setValue('@initials', rodeoInfo.initials)
        .click('@save')
    pageObject
        // .expect.element('@venue').text.to.contain(rodeoInfo.rodeoName)
        // figure this out.
    pageObject.api.perform(function (done) {
        console.log('success')
        done()
    })
}