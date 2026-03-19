import LoginPage from "../../../pom/login";


// executer ca en premier 
describe("loginPage", ()=>{
   let auth=new LoginPage()

   beforeEach(()=>{
     auth.visitLoginPage();
   })
    it("login", ()=>{
   
    auth.entrEmail();
    auth.enterPassword();
    auth.clickLogin();
    auth.verifyLoginSuccess()
    })
})
