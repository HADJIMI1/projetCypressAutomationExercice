import LoginPage from "../../../pom/login"




describe("login fonctionalité", () => {
    let auth = new LoginPage()
    beforeEach(() => {
        auth.visitLoginPage()
        cy.fixture('users').as('users')
    })

    context("avec des identifient valide", () => {
        it("connexion reussite",function (){
            auth.entrEmail(this.users.validUser.email)
            auth.enterPassword(this.users.validUser.password)
            auth.clickLogin()
            auth.verifyLoginSuccess()

        })
    })
    context("avec les indentifient invalide", () => {
        it("connexion echoue",function (){
            auth.entrEmail(this.users.invalidUser.email)
            auth.enterPassword(this.users.invalidUser.email)
            auth.clickLogin()
            auth.errorConnect()
        })
    })
})