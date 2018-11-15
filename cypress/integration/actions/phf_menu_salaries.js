/// <reference types="Cypress" />

// Prérequis : application connectée

describe('PHF - Menu Salariés', function() {
    it('Se rend sur la gestion des salariés à partir du menu', function() {  
        cy.get('.toolbar > .bar-buttons')
            .should('exist')

        if (expect('.menu-foot').not.to.be.visible) { 
            // le menu n'est pas ouvert, on l'ouvre !
            cy.get('.toolbar > .bar-buttons')
                .click()
        }

        cy.get('.menu-foot').should('be.visible')

        cy.get('.menu-inner > .content > .scroll-content')
            .contains('Salariés')
            .should('exist')

        cy.get('.menu-inner > .content > .scroll-content')
            .contains('Salariés')
            .click()

        cy.get('page-employees')
            .should('exist')
    })
})