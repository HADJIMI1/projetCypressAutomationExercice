import data from "../data/Locators.json"
import users from "../cypress/fixtures/users.json"
/// <reference types="cypress" />


 export default class LoginPage {

    visitLoginPage() {
        cy.visit("https://automationexercise.com/login");
    }

    entrEmail() {
        const mail = cy.get(data.loginMail)
        mail.type(users.email);
    }
    enterPassword() {
        const password = cy.get(data.loginPassword)
        password.type(users.password);
        
    }
    clickLogin(){
        const loginButtonClick = cy.get(data.loginButton)
        loginButtonClick.click();
    }
    verifyLoginSuccess(){
        const loginSuccess=cy.contains(" Logged in as ")
        loginSuccess.should("be.visible")
    }

}









