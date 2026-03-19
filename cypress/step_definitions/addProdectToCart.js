import AddCartProdect from "../../pom/cartProdect"

import data from "../../data/Locators.json"
import { Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";

const addProdect = new AddCartProdect();
const actionAddProduct = new ActionProductToCart();

Cypress.on("uncaught:exception", () => {
  return false;
});

Given("je suis sur la page de ProdectPolo", () => {
  
  cy.visit("https://automationexercise.com/brand_products/Polo");
});

When("l'utilisateur ajoute le produit Polo au panier", () => {
  addProdect.addProductPolo();
});

Then("le produit est ajouté et la popup se ferme", () => {
  actionAddProduct.closePopup();
});