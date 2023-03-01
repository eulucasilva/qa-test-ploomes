/// <reference types="cypress" />

import contacts from "../../fixtures/contacts.json";

var Id;
var Name = 'Pessoa 2';
var Neighborhood = "Faria Lima"

describe('Testes (CRUD) do módulo Contatos da API Ploomes', () => {
    //cy.generateFixture()
    it('Validar criação de um contato', () => {
        cy.postRequest('/Contacts', contacts).then((postContactResponse) => {
            expect(postContactResponse.status).to.equal(200);
            expect(postContactResponse.body.value[0]).to.have.property("Id");
            expect(postContactResponse.body.value[0].Name).not.to.be.empty;
            Id = postContactResponse.body.value[0].Id;
            cy.log(Id)
        });
    });

    it('Validar a consulta dos clientes', () => {
        cy.getRequest('/Contacts').then((getContactResponse) => {
            expect(getContactResponse.status).to.equal(200);
            expect(getContactResponse.body).to.be.not.null;
        })
    });


    it('Validar a edição de um cliente', () => {
        cy.patchRequest('/Contacts(' + Id + ')', {
            "Name": Name,
            "Neighborhood": Neighborhood
        }).then((patchContactResponse) => {
            expect(patchContactResponse.status).to.equal(200);
            expect(patchContactResponse.body.value[0].Name).to.equal(Name);
            expect(patchContactResponse.body.value[0].Neighborhood).to.equal(Neighborhood);
        });
    });

    it('Validar a exclusão de um cliente', () => {
        cy.deleteRequest('/Contacts(' + Id + ')').then((deleteContactResponse) => {
            expect(deleteContactResponse.status).to.equal(200);
            expect(deleteContactResponse.body).to.be.empty;
        });
    });
    
});
