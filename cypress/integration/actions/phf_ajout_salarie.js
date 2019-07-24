/// <reference types="Cypress" />

// Prérequis : Ecran liste des salariés ouvert

Cypress.Commands.add('action_phf_ajout_salarie', () => {
    cy.log('PHF - Ajout Salarié')
    cy.log('Crée un nouveau salarié')
    
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