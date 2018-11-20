/// <reference types="Cypress" />

// Prérequis : Ecran liste des salariés ouvert

describe('PHF - Ajout Salarié', function() {
    it('Crée un nouveau salarié', function() {
        cy.get('page-employees')
            .should('exist')

        cy.get('.button')
            .contains('Ajouter')
            .should('exist')

        cy.get('.button')
            .contains('Ajouter')
            .click()

        // Remplir le formulaire et valider
    })
})