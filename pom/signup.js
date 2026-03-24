import data from "../data/Locators.json"
import users from "../cypress/fixtures/users.json"
import urlPage from "../data/urlPage.json"
/// <reference types="cypress" />

export default class SignupPage {

        name=data.signupName;
        email='[data-qa="signup-email"]';
        buttonSignup=data.signupButton;
        password=data.password
        day=data.day
        month=data.month
        year=data.year
        checkbox=data.checkBox
        chckbox1=data.checkBox1
        fristName=data.fristName
        lastname=data.lastName
        company=data.company
        adress1=data.adress1
        adress2=data.adress2
        continy=data.continy
        state=data.state
        city=data.city
        codezipe=data.zipCode
        phone=data.phoneMobile
        creatAccount=data.creatAccount
        buttonContinue=data.continue
        mailLogin=data.loginMail
        userPassword=data.loginPassword
        loginButton=data.loginButton

    goToPageLogin(){
        cy.visit(urlPage.urlLogin)
    }
    signupPage() {
        
        // Remplissage des champs nom et email
        let signupName = cy.get(this.name)
        signupName.type(users.name);
        let email = cy.get(this.email)
        email.type(users.email);
        let signupBtn = cy.get(this.buttonSignup)
        signupBtn.click();

        cy.get('body').then(($body) => {
            if ($body.text().includes('Enter Account Information')) {
                // --- BLOC NOUVEL UTILISATEUR ---
                cy.get(this.password).type(users.password);
                cy.get(this.day).select(users.dateOfBrith.day);
                cy.get(this.month).select(users.dateOfBrith.month);
                cy.get(this.year).select(users.dateOfBrith.years);
                cy.get(this.checkbox).eq(0).should("be.visible").check({ force: true }).should("be.checked")
                cy.get(this.chckbox1).eq(1).should("be.visible").check({ force: true }).should("be.checked")
                cy.get(this.fristName).should("be.visible").type("salim")
                cy.get(this.lastname).should("be.visible").type(users.fristName)
                cy.get(this.company).should("be.visible").type(users.company)
                cy.get(this.adress1).should("be.visible").type(users.adress1)
                cy.get(this.adress2).should("be.visible").type(users.adress2)
                cy.get(this.continy).should("be.visible").select(users.continy).should('have.value','Canada')
                cy.get(this.state).should("be.visible").type(users.ville)
                cy.get(this.city).should("be.visible").type(users.lieu)
                cy.get(this.codezipe).should("be.visible").type(users.codeZipe)
                cy.get(this.phone).should("be.visible").type(users.phone)
                cy.get(this.creatAccount).should("be.visible").click()
                cy.get(this.buttonContinue).should("be.visible").click({ force: true })
            } else {
              const errorMesage=cy.get("p[style='color: red;']")
              errorMesage.should("be.visible")
              .and('contain','Email Address already exist!')
            }
        });
    }
}


