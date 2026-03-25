import { BasePage } from "../pageObjects/basePage";

export class deliveryMethodPage extends BasePage {
    static get deliveryTable() {
    return cy.get(".mat-mdc-table");
  } 

  static get proceedButton() {
    return cy.get("button[aria-label='Proceed to delivery method selection']");
  }
}