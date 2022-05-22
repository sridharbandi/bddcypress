class HeaderComponent{

    get iconCart(){ return cy.get('#shopping_cart_container')}

    selectCart(){
        this.iconCart.click()
    }

}
export default new HeaderComponent()