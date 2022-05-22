class PersonalInfoPage{

    get txtFirstname() {return cy.get('#first-name')}
    get txtLastname() {return cy.get('#last-name')}
    get txtPostcode() {return cy.get('#postal-code')}
    get btnContinue() {return cy.get('#continue')}


    submitPersonalInfo(){
        this.txtFirstname.type('Pratik')
        this.txtLastname.type('Surani')
        this.txtPostcode.type('00000')
        this.btnContinue.click()
    }

}
export default new PersonalInfoPage()