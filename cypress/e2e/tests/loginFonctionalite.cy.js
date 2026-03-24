import LoginPage from "../../../pom/login"
/// <reference types="cypress" />




describe("login fonctionalité", () => {
    let auth = new LoginPage()
    beforeEach(() => {
        auth.visitLoginPage()

    })

    context("avec des identifient valide", () => {
        it("connexion reussite", function () {
            cy.fixture('users').then((dataSet) => {
                this.users = dataSet
                auth.entrEmail(this.users.validUser.email)
                auth.enterPassword(this.users.validUser.password)
                auth.clickLogin()
                auth.verifyLoginSuccess()
            })

        })


    })
    context("avec les indentifient invalide", () => {
        it("connexion echoue", () => {
            cy.fixture('users').then((dataSet) => {
                auth.entrEmail(dataSet.invalidUser.email)
                auth.enterPassword(dataSet.invalidUser.password)
                auth.clickLogin()
                auth.errorConnect()
            })

        })
    })
})
