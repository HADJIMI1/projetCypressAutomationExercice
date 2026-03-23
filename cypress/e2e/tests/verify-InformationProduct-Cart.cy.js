import HomePage from "../../../pom/homePage"
import InfoCartProduct from "../../../pom/infoCartProduct"
import ActionProductToCart from "../../../action/addProdectToCart"

describe("verifie cordonne", ()=>{
let homePages=new HomePage()
let infoCart=new InfoCartProduct()
let actionButton=new ActionProductToCart()

// je suis sur la lsite d 'attente 
    it("verifie cordonne", ()=>{
        homePages.gotoHomePage()
        infoCart.selectProduct_Madame()
        infoCart.productRS1000()
        actionButton.closePopup()
        infoCart.productRs15000()
        actionButton.closePopup()
        infoCart.viewProduct()
        infoCart.priceProductRs15000()
        infoCart.verifyPrice()
        infoCart.descripProduct()
        
    })
})
