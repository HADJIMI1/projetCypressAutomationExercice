/// <reference types="cypress" />




export default class InsertionPage{


    verifieVisibilityHomePage(){
        cy.contains(" Logged in as ").should("be.visible")
    }
}