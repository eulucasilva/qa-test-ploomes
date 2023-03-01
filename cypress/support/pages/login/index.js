
const el = require ('./elements').ELEMENTS;

class Login {

    preencherDadosLogin(email, password){
        cy.get(el.inputEmail).type(email)
        cy.get(el.inputSenha).type(password);
    }
    

    fazerLogin(){
        cy.get(el.buttonEntrar).click();
    }
    

    validarLogin(){
        
        cy.get('div#centerRender').should('be.visible');
    }

    validarErroLogin(){
        cy.get('span').contains('E-mail ou senha incorretos').should('be.visible');
    }

}

export default new Login ()