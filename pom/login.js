import data from "../data/Locators.json"
import urlPage from "../data/urlPage.json"
import users from "../cypress/fixtures/users.json"
/// <reference types="cypress" />


 export default class LoginPage {

    userEmail=data.loginMail;
    userPassword=data.loginPassword;
    buttonLogin=data.loginButton


    visitLoginPage() {
        cy.visit(urlPage.urlLogin);
    }

    entrEmail(email) {
        const mail = cy.get(this.userEmail)
        mail.type(email);
    }
    enterPassword(passwordEnter) {
        const password = cy.get(this.userPassword)
        password.type(passwordEnter);
        
    }
    clickLogin(){
        const loginButtonClick = cy.get(this.buttonLogin)
        loginButtonClick.click();
    }
    verifyLoginSuccess(){
        const loginSuccess=cy.contains(" Logged in as ")
        loginSuccess.should("be.visible")
    }
    errorConnect(){
       cy.get('p[style="color: red;"]')
      .should('be.visible')
      .and('contain','Your email or password is incorrect!')
    }
    
}









