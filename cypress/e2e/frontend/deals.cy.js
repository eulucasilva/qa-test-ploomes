/// <reference types="cypress" />

import deal from '../../support/pages/deal'

const email = `${Cypress.env('EMAIL')}`
const password = `${Cypress.env('PASSWORD')}`

let nomeNegocio = "Negócio 1";
let nomenovoNegocio = "Negócio 2";

let valorNegocio = "350,00";
let valornovoNegocio = "480,00";

describe('CRUD Negócios', () => {

    beforeEach(() => {
        cy.login(email, password);
    });
    it('Validar cadastro de um negócio', () => {
        deal.listarNegocios();
        deal.cadastrarNegocio();
        deal.validarNegocio(nomeNegocio, valorNegocio);
    });

    
    it('Validar listagem de negócios', () => {
        deal.listarNegocios();
    });

    it('Validar edição de um negócio', () => {
        deal.listarNegocios();
        deal.editarNegocio();
        deal.validarNegocio(nomenovoNegocio, valornovoNegocio);
    });

    it('Validar exclusão de um negócio', () => {
        deal.listarNegocios();
        deal.excluirNegocio();
        deal.validarExclusaoNegocio();  
    });

});