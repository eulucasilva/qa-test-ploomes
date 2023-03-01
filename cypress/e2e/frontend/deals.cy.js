/// <reference types="cypress" />

import deal from '../../support/pages/deal'

var nomeNegocio = "Negócio 1";
var nomenovoNegocio = "Negócio 2";

var valorNegocio = "350,00";
var valornovoNegocio = "480,00";

describe('CRUD Negócios', () => {

    beforeEach(() => {
        cy.login()
    });
    it('Validar cadastro de um negócio', () => {
        deal.listarNegocios();
        deal.criarNegocio();
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