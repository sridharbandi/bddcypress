class LoginPage{

    //Page Elements
    get txtUsername() {return cy.get('#user-name')}
    get txtPassword() {return cy.get('#password')}
    get btnLogin() {return cy.get('#login-button')}

    openUrl() {
        cy.visit('/')
    }

    login(username, password){
        this.txtUsername.type(username)
        this.txtPassword.type(password)
        this.btnLogin.click()
    }

}
export default new LoginPage()