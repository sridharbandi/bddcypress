class CartPage{

    get btnCheckout(){ return cy.get('#checkout')}

    checkOut(){
        this.btnCheckout.click()
    }

}

export default new CartPage()