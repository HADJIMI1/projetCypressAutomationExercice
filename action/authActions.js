import data from "../data/Locators.json"


export default class authAction{


  
      clickSignupLogin(){
  cy.xpath(data.login).click({force:true})
    }
}