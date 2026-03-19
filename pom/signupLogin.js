import data from "../data/Locators.json"
import users from "../cypress/fixtures/users.json"
/// <reference types="cypress" />

export default class SignupLogin {

    signupLoginsPage() {
        
        // Remplissage des champs nom et email
        let signupName = cy.get(data.signupName)
        signupName.type(users.name);
        let email = cy.get('[data-qa="signup-email"]')
        email.type(users.email);
        let signupBtn = cy.get(data.signupButton)
        signupBtn.click();

        cy.get('body').then(($body) => {
            if ($body.text().includes('Enter Account Information')) {
                // --- BLOC NOUVEL UTILISATEUR ---
                cy.get(data.password).type(users.password);
                cy.get(data.day).select(users.dateOfBrith.day);
                cy.get(data.month).select(users.dateOfBrith.month);
                cy.get(data.year).select(users.dateOfBrith.years);
                cy.get(data.checkBox).eq(0).should("be.visible").check({ force: true }).should("be.checked")
                cy.get(data.checkBox1).eq(1).should("be.visible").check({ force: true }).should("be.checked")
                cy.get(data.fristName).should("be.visible").type("salim")
                cy.get(data.lastName).should("be.visible").type(users.fristName)
                cy.get(data.company).should("be.visible").type(users.company)
                cy.get(data.adress1).should("be.visible").type(users.adress1)
                cy.get(data.adress2).should("be.visible").type(users.adress2)
                cy.get(data.continy).should("be.visible").select(users.continy).should('have.value','Canada')
                cy.get(data.state).should("be.visible").type(users.ville)
                cy.get(data.city).should("be.visible").type(users.lieu)
                cy.get(data.zipCode).should("be.visible").type(users.codeZipe)
                cy.get(data.phoneMobile).should("be.visible").type(users.phone)
                cy.get(data.creatAccount).should("be.visible").click()
                cy.get(data.continue).should("be.visible").click({ force: true })
            } else {
                const mail = cy.get(data.loginMail)
                mail.type(users.email);
                const password = cy.get(data.loginPassword)
                password.type(users.password);
                const loginButt = cy.get(data.loginButton)
                loginButt.click();
            }
        });
    }
}


