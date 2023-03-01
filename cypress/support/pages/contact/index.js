const el = require ('./elements').ELEMENTS;

var nomeCliente = "Cliente 1";
var nomeNovoCliente = "Cliente 2";



class Contact {

    listarClientes(){
        cy.get('button').contains('Clientes').click();
        cy.get('a').contains('Pessoas').click();
        cy.get('a').contains('Novo cliente').should('be.visible'); 
        cy.url().should('contain', 'table')
    }

    cadastrarCliente (){
        cy.get('a').contains('Novo cliente').click();
        cy.get('a').contains('Pessoa').click();
        cy.get(el.inputNomeCliente).type(nomeCliente);
        cy.get('button').contains('Salvar').click({ force: true });
    }

    editarCliente(){
        cy.get('a').contains('Pessoas').click();
        cy.contains('div', nomeCliente).click();
        cy.get('a').contains('Opções').click();
        cy.get('a').contains('Editar cliente').click();
        cy.get(el.inputNomeCliente).clear().type(nomeNovoCliente);
        cy.get('button').contains('Salvar').click();
        cy.contains('div', nomeNovoCliente).should('be.visible');

    }

    excluirCliente(){
        cy.get('span').contains('Pessoas').click();
        cy.contains('div', nomeNovoCliente).click();
        cy.get('a').contains('Opções').click();
        cy.get('a').contains('Excluir cliente').click();
        cy.get('a').contains('Confirmar').click();
    }

    validarExclusaoCliente(){
        cy.get(el.msgSucesso).should('contain', 'Cliente excluído');
    }

    validarCliente (cliente){
        cy.contains('div', cliente).should('be.visible');
    }

}

export default new Contact ()