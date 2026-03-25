import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  
  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

  static get userProfileButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchInputField() {
    return cy.get("#searchQuery input");
  }

  static get productNames() {
    return cy.get(".item-name");
  }

  static get productCard() {
    return cy.get(".details-row");
  }

  static get closeButton() {
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get reviewButton() {
    return cy.get(".mat-expansion-panel");
  }

  static get validateReviewButton() {
    return cy.get("button[aria-label='Rate a helpful review']");
  }
  
  static get reviewContent() {
    return cy.get(".mat-expansion-panel-content");
  }
  
  static get reviewTextbox() {
    return cy.get("[aria-label='Text field to review a product']");
  }
  
  static get reviewSend() {
    return cy.get("button[aria-label='Send the review']");
  }

  static get cardOnPageMaxMenu() {
    return cy.get(".mat-mdc-paginator-touch-target");
  }

  static get cardOnPageMaxCurrent() {
    return cy.get(".mat-mdc-select-min-line");
  }
  
  static get cardOnPageMaxOption() {
    return cy.get("[role='option']");
  }
  
}