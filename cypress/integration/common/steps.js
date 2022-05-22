import {Given, When} from 'cypress-cucumber-preprocessor/steps'

import loginPage from '../pages/login.page'

Given('User is on Sauce demo page', () => {
    loginPage.openUrl()
})

When('User logged in with {string} {string}', (username, password)=> {
    loginPage.login(username, password)
})