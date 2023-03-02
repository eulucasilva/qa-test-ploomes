const el = require ('./elements').ELEMENTS;
require('cypress-plugin-tab') // biblioteca para usar o recurso de tabulação e facilitar a manipulação do DOM

let nomeProduto= "Produto 1";
let nomeGrupo= "Grupo" + new Date().getTime();

class Product {
    
    listarProdutos (){
        cy.get('button').contains('Produtos').click();
        cy.get('span').contains('Produtos').should('be.visible'); 
        cy.url().should('contain', 'Products');
    }

    cadastrarProdutos(){
        cy.get(el.btnNovoProduto).contains('Novo').click();
        cy.get('a').contains('Produto').click( { force: true });
        cy.get(el.inputNomeProduto).type(nomeProduto, { force: true }).wait(5000).tab().tab().type(nomeGrupo);
        cy.get(el.itemNomeGrupo).click();
        cy.get(el.btnSalvarGrupo).click();
        cy.wait(10000)
        cy.get('button').contains('Salvar').click();
        cy.wait(5000)
    }

    excluirProduto (){
        cy.get('div').contains(nomeGrupo).click();
        cy.get('a[class="button button-white"]').click();
        cy.get('a').contains('Confirmar').click();
    }

    validarProduto(){
        cy.get('div').contains(nomeProduto).should('be.visible');
    }
}

export default new Product ()