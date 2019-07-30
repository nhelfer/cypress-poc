/// <reference types="Cypress" />

// Prérequis : application connectée

Cypress.Commands.add('action_phf_menu_salaries', () => {
    cy.log('PHF - Menu Salariés')
    cy.log('Se rend sur la gestion des salariés à partir du menu')
    
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
        .contains('Salariés')
        .should('exist')

    cy.get('.menu-inner > .content > .scroll-content')
        .contains('Salariés')
        .parent()
        .click()

    cy.get('page-employees')
        .should('exist')

    cy.get('.menu-inner').then(($menu) => {
        if ($menu.is(':visible')) {
            // le menu est ouvert, on le ferme !
            cy.get('.menu-close')
                .click()
        }
    })
})