/// <reference types="Cypress" />

// Prérequis : application connectée

Cypress.Commands.add('action_phf_retour', () => {
    cy.log('PHF - Retour à la page d\'accueil')
    cy.log('Se rend sur la gestion des salariés à partir du menu')

    cy.get('.toolbar > .bar-buttons').should('exist')

    cy.get('.back-button').then(($backButton) => {
        $backButton.click();
    })
})