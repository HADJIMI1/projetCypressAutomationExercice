import data from "../../../data/Locators.json"
import SignupLogin from "../../../pom/signupLogin"
import fixtures from "../../fixtures/users.json"


describe("page Signup and Login", ()=>{
let signupLogin=new SignupLogin()
    // on doit executer ca en premier avant tout le reste obligatoire 
    // je voir que tu veux faire une nouvelle modification toujour 
  beforeEach(() => {
    cy.visit("https://automationexercise.com/login")
  })

  it("Signup", ()=>{
    signupLogin.signupLoginsPage()
  })
})
