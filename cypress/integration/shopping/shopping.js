import {Then, And} from 'cypress-cucumber-preprocessor/steps'

import productsPage from '../pages/products.page'
import productPage from '../pages/product.page'
import cartPage from '../pages/cart.page'
import personalInfoPage from '../pages/personalinfo.page'
import reviewPage from '../pages/review.page'
import confirmPage from '../pages/confirm.page'

And('User add fleece jacket to the cart', ()=>{
    productsPage.selectFleeceJacket()
    productPage.addToCart()
    productPage.btnRemove.should('be.visible')
})

And('User checkout the product', ()=>{
    productPage.chooseCart()
    cartPage.checkOut()
})

And('User submits his personal information', ()=>{
    personalInfoPage.submitPersonalInfo()
})

And('User confirmed the product', ()=>{
    reviewPage.confirmOrder()
})

Then('User sees order confirmed', ()=>{
    confirmPage.lblConfirm.should('contain', 'THANK YOU FOR YOUR ORDER')
})
