import LoginPage from "../../../pom/login"
import data from "../../../data/Locators.json"
import users from "../../fixtures/users.json"




describe("login fonctionalité", () => {
    let auth = new LoginPage()
    beforeEach(() => {
        auth.visitLoginPage()
    })

    context("avec des identifient valide", () => {
        it("connexion reussite", () => {
            auth.entrEmail("salimhadjimi640010@gmail.com")
            auth.enterPassword("Salimsalim.14071995")
              auth.clickLogin()
            auth.verifyLoginSuccess()
    })
    })
    context("avec les indentifient invalide", () => {
        it("connexion echoue", () => {
            auth.entrEmail("salimhadjimi@gmail.com")
            auth.enterPassword("Salimsalim.94")
            auth.clickLogin()
            auth.errorConnect()
        })
    })
})
