/// <reference types="Cypress" />

// Prérequis : Utilisateur connecté

Cypress.Commands.add('action_phf_logout', () => {
    cy.log('PHF - Logout')
    cy.log('Se déconnecte de l\'application')

    
})