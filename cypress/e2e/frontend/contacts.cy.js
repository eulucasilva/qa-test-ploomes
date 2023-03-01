/// <reference types="cypress" />

import contact from '../../support/pages/contact'

var nomeCliente = "Cliente 1";
var nomeNovoCliente = "Cliente 2";

describe('CRUD Clientes', () => {
    beforeEach(() => {
        cy.login()
    });
    it('Validar cadastro de um cliente', () => {
        contact.listarClientes();
        contact.cadastrarCliente();
        contact.validarCliente(nomeCliente);
    });

    it('Validar listagem de clientes', () => {
        contact.listarClientes();
    });

    it('Validar edição de um cliente', () => {
        contact.listarClientes();
        contact.editarCliente();
        contact.validarCliente(nomeNovoCliente);
    });

    it('Validar exclusão de um cliente', () => {
         contact.listarClientes();
         contact.excluirCliente();
         contact.validarExclusaoCliente();
    });

    
});