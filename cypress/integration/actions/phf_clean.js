/// <reference types="Cypress" />

Cypress.Commands.add('action_phf_clean', () => {
    cy.log('ACTION : PHF - Clean') 
    cy.log('Supprime les Cookies avant le démarrage des tests')

    Cypress.Cookies.debug(true)
    cy.clearCookie('phf-server-login')  
})