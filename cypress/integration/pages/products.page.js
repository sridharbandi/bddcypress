class ProductsPage{

    //Page Elements
    get lnkFleeceJacket() {return cy.contains('Sauce Labs Fleece Jacket')}

    selectFleeceJacket() {
        this.lnkFleeceJacket.click()
    }

    getUrl(){
        return cy.url()
    }

}

export default new ProductsPage()