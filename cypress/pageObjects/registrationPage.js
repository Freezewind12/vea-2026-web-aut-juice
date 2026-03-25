import { BasePage } from "../pageObjects/basePage";

export class registationPage extends BasePage {
  static get emailField() {
    return cy.get("#emailControl");
  }
  static get passwordField() {
    return cy.get("#passwordControl");
  }
  static get repeatPasswordField() {
    return cy.get("#repeatPasswordControl");
  }
  static get securityQuestionDropdown() {
    return cy.get("[name='securityQuestion']");
  }
  static get securityAnswerOption() {
    return cy.get("[role='option']");
  }
  static get securityAnswerField() {
    return cy.get("#securityAnswerControl");
  }
   static get registerButton() {
    return cy.get("#registerButton");
  }
  
}