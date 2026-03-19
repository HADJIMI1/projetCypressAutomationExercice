export default class ActionProductToCart{


continueShoping(){
   cy.get('button.btn-success').click(); 
}

addProductToCart(){
     cy.get("a[data-product-id='1']" ,{timeout:7000}).contains("Add to cart").click()
}

closePopup(){
   cy.wait(950)
    cy.get("button[data-dismiss='modal']")
          .should("be.visible")
          .click({ force: true });
}
//Continue Shopping

}