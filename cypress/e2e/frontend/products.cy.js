/// <reference types="cypress" />

const email = `${Cypress.env('EMAIL')}`
const password = `${Cypress.env('PASSWORD')}`

import produto from '../../support/pages/product'

describe('CRUD Produtos', () => {

    beforeEach(() => {
        cy.login(email, password);
    });


    it('Validar cadastro de um produto', () => {
        produto.listarProdutos();
        produto.cadastrarProdutos();
        produto.validarProduto();
    });

    it('Validar listagem de um produto', () => {
        produto.listarProdutos();
    });

    it('Validar exclusão de um produto', () => {
        produto.listarProdutos();
        produto.excluirProduto();
    });
});