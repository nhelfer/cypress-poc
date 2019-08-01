/// <reference types="Cypress" />

// Prérequis : Utilisateur connecté
// Prérequis : Page courante : Accueil

Cypress.Commands.add('action_phf_logout', () => {
    cy.log('PHF - Logout')
    cy.log('Se déconnecte de l\'application')

    cy.get('.toolbar-title:visible')
        .should('contain', 'Accueil')

    cy.get('.toolbar > .bar-buttons').should('exist')

    cy.get('.menu-inner').then(($menu) => {
        if (!$menu.is(':visible')) {
            // le menu n'est pas ouvert, on l'ouvre !
            cy.get('.toolbar > .bar-buttons')
                .click()
        }
    })

    cy.get('.menu-inner').should('be.visible')

    cy.get('.menu-inner > .content > .scroll-content')
        .get('ion-icon[name="phf-logout"]')
        .should('exist')

    cy.get('.menu-inner > .content > .scroll-content')
        .get('ion-icon[name="phf-logout"]')
        .then (($button) => {
            $button.click()
        })
        
    cy.get('.toolbar-title')
        .should('contain', 'Connexion')
})