import SignupPage from "../../../pom/signup";



describe("signup", ()=>{
    let signup =new SignupPage()
    beforeEach(()=>{
        signup.goToPageLogin()
    })
    context("compte inixestant", ()=>{
        it("Creer un nouveau compte", ()=>{
            signup.signupPage()
        })
    })
})