/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When("a user access to the main page", () => {
  cy.visit("/");
});

Then("the main page in loaded", () => {});
