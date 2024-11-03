/// <reference types="cypress" />

describe("Cypress interview", () => {
  beforeEach(()=>{
    cy.visit(process.env.WEB_URL);
  });
  it("Ejercicio 4.1", () => {
    cy.intercept('GET', process.env.API_URL+"/posts").as('getPosts');
    cy.contains("Fetching Data").click();
    cy.wait('@getPosts').its('response.statusCode').should('equal', 200);
    cy.get('.icard').eq(2).invoke('text').then((text)=>{
      cy.log(text)
    })
  })
  it("Ejercicio 4.2", ()=>{
    cy.contains("Multi Level Dropdown").click();
    cy.get('.icon-button').eq(3).should('exist').click();
    cy.contains('Settings').should('be.visible');
  })
});
