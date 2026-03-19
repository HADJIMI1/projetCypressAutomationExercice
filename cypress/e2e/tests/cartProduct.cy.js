import AddCartProdect from "../../../pom/cartProdect"
import ActionProductToCart from "../../../action/addProdectToCart"



Cypress.on("uncaught:exception", () => {
    return false;
});
describe("Add Product To Cart", () => {

    let addProduct = new AddCartProdect()
    let actionAddProduct = new ActionProductToCart()



    beforeEach(() => {
        addProduct.visitProductPolo()
    })
    it("goToHomePage", () => {
        addProduct.visitProductPolo()
        addProduct.BrandPolo()
        addProduct.addProductPolo()
        actionAddProduct.closePopup()

    })
})