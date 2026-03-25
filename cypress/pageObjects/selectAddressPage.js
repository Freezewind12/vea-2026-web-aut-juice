import { BasePage } from "../pageObjects/basePage";

export class selectAddressPage extends BasePage {
  
  static get addressTable() {
    return cy.get(".mat-mdc-table");
  } 

  static get proceedButton() {
    return cy.get("button[aria-label='Proceed to payment selection']");
  }
  
}