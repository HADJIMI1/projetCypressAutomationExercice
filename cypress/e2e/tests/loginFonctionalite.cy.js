import LoginPage from "../../../pom/login"




describe("login fonctionnalité", () => {
    let auth = new LoginPage()

    beforeEach(function() {
        auth.visitLoginPage()
        cy.fixture('users').then((users) => {
            this.users = users
        })
    })

    context("avec des identifiants valides", () => {
        it("connexion reussite", function () {
            auth.entrEmail(this.users.validUser.email)
            auth.enterPassword(this.users.validUser.password)
            auth.clickLogin()
            auth.verifyLoginSuccess()
        })
    })

    context("avec des identifiants invalides", () => {
        it("connexion échoue", function () {
            auth.entrEmail(this.users.invalidUser.email)
            auth.enterPassword(this.users.invalidUser.password)
            auth.clickLogin()
            auth.errorConnect()
        })
    })
})