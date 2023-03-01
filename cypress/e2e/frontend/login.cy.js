/// <reference types="cypress" />

const email = `${Cypress.env('EMAIL')}`
const password = `${Cypress.env('PASSWORD')}`

describe("Login no Ploomes", () => {
    it("Validar login com sucesso no Ploomes", () => {
      cy.login(email, password);
    });

    it('Validar login com email e/ou senha incorretos', () => {
      cy.login("lucasteste@qa.com", "123456abc");
    });
  });