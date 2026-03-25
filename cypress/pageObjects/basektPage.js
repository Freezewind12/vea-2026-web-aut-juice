import { BasePage } from "../pageObjects/basePage";

export class basketPage extends BasePage {
    static get checkoutButton() {
    return cy.get("#checkoutButton");
  }
    
}