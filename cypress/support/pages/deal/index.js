const el = require ('./elements').ELEMENTS;

var nomeNegocio = "Negócio 1";
var nomenovoNegocio = "Negócio 2";

var valorNegocio = "350,00";
var valornovoNegocio = "480,00";

class Deal {

    listarNegocios(){
        cy.get('button').contains('Negócios').click();
        cy.contains('a', 'Novo negócio').should('be.visible');
        cy.url().should('contain', 'funnel')
    }

    criarNegocio(){
        cy.get('a').contains('Novo negócio').click();
        cy.get(el.inputNomeNegocio).type(nomeNegocio, { force: true });
        cy.get(el.inputValorNegocio).type(valorNegocio, { force: true });
        cy.get('button').contains('Salvar').click();
    }

    editarNegocio(){
        cy.get('button').contains('Negócios').click();
        cy.get("a").contains(nomeNegocio).click({ force: true });
        cy.get("a").contains("Opções").click();
        cy.get("a").contains("Editar negócio").click();
        cy.get(el.inputNomeNegocio).clear().type(nomenovoNegocio);
        cy.get(el.inputValorNegocio).clear().type(valornovoNegocio);
        cy.get("button").contains("Salvar").click();
    }

    excluirNegocio(){
        cy.get('a').contains(nomenovoNegocio).click();
        cy.get('a').contains('Opções').click();
        cy.get('a').contains('Excluir negócio').click();
        cy.get('a').contains('Confirmar').click();
    }

    validarExclusaoNegocio(){
        cy.get(el.msgSucesso).should('contain', 'Sucesso');
    }

    validarNegocio(negocio, valor){
        cy.contains('div', negocio).should('be.visible');
        cy.get(el.spanValorNegocio).should('contain', valor);
    }

}

export default new Deal ()