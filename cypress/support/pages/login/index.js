const email = `${Cypress.env('EMAIL')}`
const password = `${Cypress.env('PASSWORD')}`

const el = require ('./elements').ELEMENTS;

class Login {

    preencherDadosLogin(){
        cy.get(el.inputEmail).type(email)
        cy.get(el.inputSenha).type(password);
    }
    

    fazerLogin(){
        cy.get(el.buttonEntrar).click();
    }
    

    validarLogin(){
        cy.get('div#centerRender').should('be.visible');
        //cy.get('[class="side-wrapper"]', { timeout: 15000 });
    }

}

export default new Login ()