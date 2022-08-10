/// <reference types="cypress" />

describe("All login scenarios", () => {
  beforeEach(() => {
    // this will first run to open the website on each test case / it()

    cy.visit("https://trytestingthis.netlify.app");
  });
  // Testing invalid username and valid password
  it("Invalid Login", function () {
    cy.get("#uname").type("admin");
    cy.get("#pwd").type("test");
    cy.get('[type="submit"]').click();
    cy.get('h2').should('contain','Login Successful :)')
  });
  // Testing valid username and valid password
  it("Valid Login", function () {
    cy.get("#uname").type("test");
    cy.get("#pwd").type("test");
    cy.get('[type="submit"]').click();
    cy.get('h2').should('contain','Login Successful :)')
  });
  // Testing valid username and invalid password
  it("Invalid Login", function () {
    cy.get("#uname").type("test");
    cy.get("#pwd").type("admin123");
    cy.get('[type="submit"]').click();
    cy.get('h2').should('contain','Login Successful :)')
  });

  // Testing invalid username and invalid password
  it("Invalid Login", function () {
    cy.get("#uname").type("admin");
    cy.get("#pwd").type("admin123");
    cy.get('[type="submit"]').click();
    cy.get('h2').should('contain','Login Successful :)')
  });
});
