module.exports = {
    url: 'http://test.rodeoticket.com',
    elements: {

        //log in
        login: 'a[id="logInDrawer"]',
        logout: 'a[class="btn-login"]',
        username: 'input[name="username"]',
        password: 'input[name="password"]',
        loginButton: 'button[name="action"]',

        //current races page
        createRodeo: 'a[data-test="create-an-event"]',

        //copy or create page
        copyExisting: '#create_or_copy_selection > div:nth-child(2)',
        createNew: '#create_or_copy_selection > div:nth-child(4)',

        //create rodeo page
        rodeoName: 'input[id="event_name"]',

        //where & when
        address: 'input[id="street"]',
        city: 'input[id="city"]',
        state: 'select[id="state_id"]',
            alabama: {
                selector: '//*[@id="state_id"]/option[9]',
                locateStrategy: 'xpath'
            },
            georgia: 'select[id="state_id"] option[value="10"]',
            maryland: 'select[id="state_id"] option[value="20"]',
        province: 'input[id="province"]',
        country: 'select[id="country"]',
            usa: 'select[id="country"] option[value="USA"]',
        zip: 'input[id="zip"]',
        timeZone: 'select[id="timezone_id"]',
            denver: 'select[id="timezone_id"] option[value="1"]',
            ny: 'select[id="timezone_id"] option[value="2"]',
            chicago: 'select[id="timezone_id"] option[value="3"]',
            phoenix: 'select[id="timezone_id"] option[value="4"]',
            la: 'select[id="timezone_id"] option[value="5"]',
            anchorage: 'select[id="timezone_id"] option[value="6"]',
            honolulu: 'select[id="timezone_id"] option[value="7"]',
        dateTime: 'input[id="event-datetime"]',

        //basic rodeo info
        description: '#tinymce',
        url: 'input[id="external_url"]',

        //contact info
        firstName: 'input[name="contact_first_name"]',
        lastName: 'input[name="contact_last_name"]',
        email: 'input[name="contact_email"]',
        createReg: 'input[id="create-registration"]',

        //rodeo participation categories
        addCategory: 'button[id="add-category-create"]',
            //all categories
            catName: 'input[name="cat_name_1"]',
            partLimit: 'input[name="cat_participant_limit_1"]',
            minAge: 'input[name="cat_minimum_age_1"]',
            maxAge: 'input[name="cat_maximum_age_1"]',

            //individual categories
            catInd: 'input[id="category-type-individual"]',
            catIndPrice: 'input[name="cat_individual_price_1"]',

            //team categories
            catTeam: 'input[id="category-type-team"]',
            cptnPrice: 'input[name="cat_team_price_create_1"]',
            teammatePrice: 'input[name="cat_team_price_join_1"]',
            maxMembers: 'input[name="cat_max_team_members_1"]',
            limitBy: 'select[name="limit-by"]',
                team: 'option[value="team"]',
                part: 'option[value="participant"]',
            teamLimit: 'input[name="cat_team_limit_1"]',

            //remove category
    

        //registration info
        openRegLater: 'input[id="open-reg-later"]',
            regOpens: 'input[id="registration-opens-datetime"]',
        tax: 'input[id="charge-tax"]',
            taxRate: 'input[id="tax-charge"]',
        waiver: 'textarea[name="terms_text"]',
        regEnds: 'input[id="registration-ends"]',

        //checks payable information
        payee: 'select[id="payee_select"]',
            existingPayee: 'select[id="payee_select"] option[value="existing"]',
                payee1: {
                    selector: '//*[@id="table_row_payees_1217"]/td[1]',
                    locateStrategy: 'xpath'
                },
                payee2: 'tr[id="table_row_payees_1220"]',
            createPayee: 'select[id="payee_select"] option[value="new"]',
                entityName: 'input[id="payee-name"]',
                payeeAddress: 'input[id="payee-address"]',
                payeeCity: 'input[id="payee-city"]',
                payeeState: 'select[id="payee_state_id"]',
                    alabama: 'select[id="payee_state_id"] option[value="1"]',
                    georgia: 'select[id="payee_state_id"] option[value="10"]',
                    maryland: 'select[id="payee_state_id"] option[value="20"]',
                payeeZip: 'input[id="payee-zip"]',
                

        //terms and conditions
        initials: 'input[name="terms_initials"]',

        //save
        save: 'button[id="save-button"]',

        //list of current events
        currentEvents: 'select[class="form-control"]',
            howdy: 'select[class="form-control"] option[value="howdy"]',
            testing: 'select[class="form-control"] option[value="testing"]',
            yeehaw: 'select[class="form-control"] option[value="yeehaw"]',

        //to next year or to different event
        copyType: 'select[id="copy-type"] option[value="0"]',
            nextYear: 'select[id="copy-type"] option[value="2"]',
            difRodeo: 'select[id="copy-type"] option[value="1"]',


        //venue and seat arrangements
        // venue: {
        //     selector: '/html/body/div[12]/div/h1/a',
        //     locateStrategy: 'xpath'
        // }


    }
}