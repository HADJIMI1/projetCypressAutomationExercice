import LoginPage from "../../../pom/login"
import authAction from "../../../action/authActions"
import InsertionPage from "../../../inssertion/inssertionPage"
import AddCartProdect from "../../../pom/cartProdect"
import ActionProductToCart from "../../../action/addProdectToCart"


describe("valide cart product", ()=>{
let login=new LoginPage()
let auth=new authAction
let inserPage=new InsertionPage()
let addCartProdect=new AddCartProdect()
let actionProduct =new ActionProductToCart() //closePopup
    
  beforeEach(() => {
    cy.visit("https://automationexercise.com/")
  })

  it("verifie l'url existe", ()=>{
    cy.url().should('contain', 'automationexercise')
  })
  it("auth and Ajouter le produit to cart ",()=>{
    auth.clickSignupLogin()
    login.entrEmail()
    login.enterPassword()
    login.clickLogin()
    inserPage.verifieVisibilityHomePage()
    addCartProdect.visitProductPolo()
    addCartProdect.BrandPolo()
    addCartProdect.addProductPolo()
    actionProduct.closePopup()

  })
  /*
  it("verifie l'auth est ajouter les produit Polo au panier", ()=>{
    inserPage.verifieAuthenticationHomePage()
  })*/
})