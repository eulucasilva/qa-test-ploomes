declare namespace Cypress {
    interface Chainable<Subject> {
        getRequest(endpoint: any): Chainable<any>
        postRequest(endpoint: any, data: any): Chainable<any>
        deleteRequest(endpoint: any): Chainable<any>
        patchRequest(endpoint: any, data: any): Chainable<any>
        login(email: any, password: any): Chainable<any>
  }
}