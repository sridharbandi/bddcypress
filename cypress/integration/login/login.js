import {Then} from 'cypress-cucumber-preprocessor/steps'

import productsPage from '../pages/products.page'


Then('User should login successful', ()=> {
    productsPage.getUrl().should('contain', 'inventory.html')
})