import { BasePage } from "../pageObjects/basePage";

export class paymentOptionsPage extends BasePage {
    static get paymentOptionsTable() {
    return cy.get(".mat-mdc-card");
  } 
  static get proceedButton() {
    return cy.get("button[aria-label='Proceed to review']");
  }
}
//