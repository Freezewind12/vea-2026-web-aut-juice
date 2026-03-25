import { BasePage } from "../pageObjects/basePage";

export class orderCompeltionPage extends BasePage {
  static get orderCompeltionTable() {
    return cy.get(".order-completion-header");
  }
}