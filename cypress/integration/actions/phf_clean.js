/// <reference types="Cypress" />

describe('PHF - Clean', function() {
    it('Supprime les Cookies avant le démarrage des tests', function() {
        Cypress.Cookies.debug(true)
        cy.clearCookie('phf-server-login')
        
        beforeEach(function () {
            Cypress.Cookies.preserveOnce('phf-server-login')
        })
    })
})