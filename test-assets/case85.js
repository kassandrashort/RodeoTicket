//https://dmutah.atlassian.net/browse/Q7K-84
//RODEO WITHOUT REGISTRATION
//RODEO WITH CATEGORIES
//RODEO WITHOUT PAYEE

module.exports = (pageObject, rodeoInfo) => {
    pageObject
        .click('@login')
        .waitForElementVisible('@username', 10000)
        .setValue('@username', rodeoInfo.fields.username)
        .setValue('@password', rodeoInfo.fields.password)
        .click('@loginButton')
        .click('@createRodeo')
        .click('@createNew')
        .setValue('@rodeoName', rodeoInfo.fields.rodeoName)
        .setValue('@address', rodeoInfo.fields.address)
        .setValue('@city', rodeoInfo.fields.city)
        .click(rodeoInfo.fields.state)
        .click(rodeoInfo.fields.country)
        .setValue('@zip', rodeoInfo.fields.zip)
        .click(rodeoInfo.fields.timeZone)
        .setValue('@dateTime', rodeoInfo.fields.dateTime)
        .api.frame('event-description_ifr')
    pageObject
        .setValue('@description', rodeoInfo.fields.description)
        .api.frameParent()
    pageObject
        .setValue('@url', rodeoInfo.fields.url)
        .setValue('@firstName', rodeoInfo.fields.firstName)
        .setValue('@lastName', rodeoInfo.fields.lastName)
        .setValue('@email', rodeoInfo.fields.email)
        //takes away registration form
        .click('@createReg')
        .click('@addCategory')
        .setValue('@catName', rodeoInfo.fields.catName)
        .setValue('@catIndPrice', rodeoInfo.fields.catIndPrice)
        .setValue('@partLimit', rodeoInfo.fields.partLimit)
        .setValue('@minAge', rodeoInfo.fields.minAge)
        .setValue('@maxAge', rodeoInfo.fields.maxAge)
        .setValue('@initials', rodeoInfo.fields.initials)
        .click('@save')
    pageObject
        // .expect.element('@venue').text.to.contain(rodeoInfo.fields.rodeoName)
        // figure this out.
    pageObject.api.perform(function (done) {
        console.log('success')
        done()
    })
}