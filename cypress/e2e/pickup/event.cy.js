/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("post events", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
  });

  it("Post Data", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.visit("localhost:3000/events/eventCreation");
    cy.get("#eventName").type("Test Event");
    cy.get("#description").type("Test Description");
    cy.get("#location").type("Test Location");

    cy.get("#sportsType").select("Basketball");
    cy.get("#submitBtn").click();
    cy.get("#createdRef").should("have.text", "Event Created!");
  });
  it("Display Data with different slider inputs", () => {
    cy.visit("localhost:3000/events/displayEvents");
    cy.get("#sportsType").select("Basketball");
    cy.get("article").should("have.length", 10);
    cy.get('input[type="range"]')
      .should("have.value", 10)
      .then(($el) => $el[0].stepUp(-5))
      .trigger("change")
      .should("have.value", 5);
    cy.get("article").should("have.length", 5);
    cy.get('input[type="range"]')
      .should("have.value", 5)
      .then(($el) => $el[0].stepUp(10))
      .trigger("change")
      .should("have.value", 15);
    cy.get("article").should("have.length", 15);
  });
});
