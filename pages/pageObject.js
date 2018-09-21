module.exports = {
    url: 'http://test.rodeoticket.com',
    elements: {

        //log in
        login: 'a[id="logInDrawer"]',
        username: 'input[name="user"]',
        password: 'input[name="password"]',

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
            alabama: 'option[value="1"]',
            georgia: 'option[value="10"]',
            maryland: 'option[value="20"]',
        province: 'input[id="province"]',
        country: 'select[id="country"]',
        zip: 'input[id="zip"]',
        timeZone: 'select[id="timezone_id"]',
            denver: 'option[value="1"]',
            ny: 'option[value="2"]',
            chicago: 'option[value="3"]',
            phoenix: 'option[value="4"]',
            la: 'option[value="5"]',
            anchorage: 'option[value="6"]',
            honolulu: 'option[value="7"]',
        dateTime: 'input[id="event-datetime"]',

        //basic rodeo info
        description: '#tinymce > p',
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
            removeCat: '',

        //registration info
        openRegLater: 'input[id="open-reg-later"]',
            regOpens: 'input[id="registration-opens-datetime"]',
        tax: 'input[id="charge-tax"]',
            taxRate: 'input[id="tax-charge"]',
        waiver: 'textarea[name="terms_text"]',
        regEnds: 'input[id="registration-ends"]',

        //checks payable information
        payee: 'select[id="payee-select"]',
            existingPayee: 'option[value="existing"]',
                //modal?
            createpayee: 'option[value="new"]',
                entityName: '',
                payeeAddress: '',
                payeeCity: '',
                payeeState: '',
                payeeZip: '',
                

        //terms and conditions
        initials: 'input[name="terms_initials"]',

        //save
        save: 'button[id="save-button"]',

    }
}