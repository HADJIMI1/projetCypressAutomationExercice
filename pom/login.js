import data from "../data/Locators.json"
import users from "../cypress/fixtures/users.json"
/// <reference types="cypress" />


 export default class LoginPage {

    visitLoginPage() {
        cy.visit("https://automationexercise.com/login");
    }

    entrEmail(email) {
        const mail = cy.get(data.loginMail)
        mail.type(email);
    }
    enterPassword(passwordEnter) {
        const password = cy.get(data.loginPassword)
        password.type(passwordEnter);
        
    }
    clickLogin(){
        const loginButtonClick = cy.get(data.loginButton)
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









