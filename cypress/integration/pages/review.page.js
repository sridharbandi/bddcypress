class ReviewPage{

    get btnFinish(){return cy.get('#finish')}

    confirmOrder(){
        this.btnFinish.click()
    }

}
export default new ReviewPage()