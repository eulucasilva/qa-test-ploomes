/// <reference types="cypress" />

import deals from '../../fixtures/deals.json'

var Id;
var Title = 'Negócio 2';
var Amount = 30;

describe('Testes (CRUD) do módulo Negócios da API Ploomes', () => {
    it('Validar criação de um negócio', () => {
        cy.postRequest('/Deals', deals).then((postDealResponse) => {
            expect(postDealResponse.status).to.equal(200);
            expect(postDealResponse.body.value[0]).to.have.property("Id");
            expect(postDealResponse.body.value[0].Title).not.to.be.empty;
            Id = postDealResponse.body.value[0].Id;
        });
    });

    it('Validar a consulta dos negócios', () => {
        cy.getRequest('/Deals').then((getDealResponse) => {
            expect(getDealResponse.status).to.equal(200);
            expect(getDealResponse.body).to.be.not.null;
        })
    });

    it('Validar a edição de um negócio', () => {
        cy.patchRequest('/Deals(' + Id + ')', {
            "Title": Title,
            "Amount": Amount
        }).then((patchDealResponse) => {
            expect(patchDealResponse.status).to.equal(200);
            expect(patchDealResponse.body.value[0].Title).to.equal(Title);
            expect(patchDealResponse.body.value[0].Amount).to.equal(Amount);
        });
    });

    it('Validar a exclusão de um negócio', () => {
        cy.deleteRequest('/Deals(' + Id + ')').then((deleteDealResponse) => {
            expect(deleteDealResponse.status).to.equal(200);
            expect(deleteDealResponse.body).to.be.empty;
        });
    });
});