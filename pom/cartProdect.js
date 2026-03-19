import data from "../data/Locators.json"

Cypress.on('uncaught:exception', (err, runnable) => {
  // retourne false ici empêche Cypress d'échouer le test
  return false;
});

export default class AddCartProdect {

  visitPageProduct=data.urlPageBrandProducts;
  brandPolos=data.brandPorlo;
  addProPolo=data.addProductPolo1;

  constructor(){

  }

  visitProductPolo() {
    cy.visit(this.visitPageProduct)
  }




  BrandPolo() {

    cy.get(this.brandPolos)
      .should("be.visible")
      .click()
  }

  addProductPolo() {
    cy.get(this.addProPolo, { timeout: 2500 }).contains('Add to cart')
      .should("be.visible")
      .click({force:true});


  }






}



