import LoginPage from "../../../pom/login"




describe("login fonctionnalité", () => {
    const auth = new LoginPage()
    let users

    beforeEach(() => {
        auth.visitLoginPage()
        cy.fixture('users').then((data) => {
            users = data
        })
    })

    context("avec des identifiants valides", () => {
        it("connexion reussite", () => {
            auth.entrEmail(users.validUser.email)
            auth.enterPassword(users.validUser.password)
            auth.clickLogin()
            auth.verifyLoginSuccess()
        })
    })

    context("avec des identifiants invalides", () => {
        it("connexion échoue", () => {
            auth.entrEmail(users.invalidUser.email)
            auth.enterPassword(users.invalidUser.password)
            auth.clickLogin()
            auth.errorConnect()
        })
    })
})
