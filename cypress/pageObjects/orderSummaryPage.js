import { BasePage } from "../pageObjects/basePage";

export class orderSummaryPage extends BasePage {
  static get proceedButton() {
    return cy.get("button[aria-label='Complete your purchase']");
  }
}