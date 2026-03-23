import HomePage from "./homePage"
///<reference types="cypress"/>



Cypress.on('uncaught:exception', (err, runnable) => {
    // retourne false ici empêche Cypress d'échouer le test
    return false;
});
export default class InfoCartProduct {




    constructor(){
                

    }


    selectProduct_Madame() {
        cy.xpath("//a[@href='/brand_products/Madame']").should("be.visible").click({ force: true })

    }
    productRS1000() {
        cy.get(":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn")
            .should("be.visible").click({ force: true })
    }
    productRs15000() {
        cy.get(":nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn")
            .should('be.visible').click({ force: true })
    }
    viewProduct(){
        cy.xpath("//a[@href='/product_details/4']").should('be.visible')
        .click({force:true})
    }
   
    priceProductRs15000(){
        cy.get("span > span").contains('Rs. 1500').should("be.visible")
    }
      verifyPrice() {
        cy.get("[name='quantity']")
        .should('be.visible')
        .clear()
        .type("5")
      }
      descripProduct(){
        cy.get(".product-information > :nth-child(6)").should("be.visible")
        cy.get(".product-information > :nth-child(7)").should("be.visible")
        cy.get(".product-information > :nth-child(8)").should("be.visible")    
      }




}