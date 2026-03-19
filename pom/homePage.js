import data from "../data/Locators.json"
/// <reference types="cypress" />


export default class HomePage {


    gotoHomePage() {
        cy.visit(data.url)
    }
}