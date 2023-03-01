// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const authorization = `${Cypress.env('ACCESS_TOKEN')}`

import login from '../support/pages/login'



Cypress.Commands.add('getRequest', (endpoint) =>  {
    cy.request({
        method: 'GET',
        url: endpoint,
        headers: { 'User-key': authorization }
    });
    
})

Cypress.Commands.add('postRequest', (endpoint, data) =>  {
    cy.request({
        method: 'POST',
        url: endpoint,
        headers: { 
            'User-key': authorization 
        },
        body: data
    });
    
})

Cypress.Commands.add('deleteRequest', (endpoint) =>  {
    cy.request({
        method: 'DELETE',
        url: endpoint,
        headers: { 
            'User-key': authorization 
        },
    });
    
})

Cypress.Commands.add('patchRequest', (endpoint, data) =>  {
    cy.request({
        method: 'PATCH',
        url: endpoint,
        headers: { 
            'User-key': authorization 
        },
        body: data
    });
    
})

Cypress.Commands.add('login', (email, password) => {
    cy.visit(Cypress.config('urlFront'));
    login.preencherDadosLogin(email, password);
    login.fazerLogin();
    if(email != `${Cypress.env('EMAIL')}` || password != `${Cypress.env('PASSWORD')}`){
        login.validarErroLogin();
    }
    else {
        login.validarLogin();
    }
  });