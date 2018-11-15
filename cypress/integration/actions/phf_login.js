/// <reference types="Cypress" />

describe('PHF - Login', function() {
    it('Se connecte à l\'application', function() {
        // Recette
        cy.visit('http://5.153.53.197:85/app/')

        // IC
        //cy.visit('http://159.122.36.22:85/app/')
        
        cy.get('.toolbar-title')
            .should('contain', 'Connexion')

        cy.get('input[formcontrolname=login]')
            .type('40')

        cy.get('input[formcontrolname=password]')
            .type('Azer1234')

        cy.contains('button', 'connecter')
            .click()

        cy.get('.toolbar-title')
            .should('contain', 'Accueil')
    })
})