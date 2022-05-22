import headerComp from "../components/header.comp"

class PdpPage{

    get btnAddtocart() {return cy.get('#add-to-cart-sauce-labs-fleece-jacket')}
    get btnRemove() {return cy.contains('Remove')}

    addToCart(){
        this.btnAddtocart.click()
    }

    chooseCart(){
        headerComp.selectCart()
    }


}
export default new PdpPage()