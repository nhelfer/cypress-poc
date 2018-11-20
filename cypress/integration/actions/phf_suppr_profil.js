/// <reference types="Cypress" />

// Prérequis : Page d'administration ouverte

var profilToDelete = "E2E_2018-11-19_00-46-01"

describe('PHF - Suppression Profil', function() {
    it('Crée un nouveau profil', function() {
        cy.get('page-administration')
            .should('exist')

        if (expect('.selected').contains('Profils').not.to.be.visible) { 
            // Ce n'est pas le bon onglet, on en change !
            cy.get('.phf-tabs > a')
                .contains('Profils')
                .click()
        }

        cy.get('.selected')
            .contains('Profils')
            .should('exist')

        cy.get('ion-icon[ng-reflect-name=phf-delete] > input[ng-reflect-model='+profilToDelete+']')
            .next('ion-icon[ng-reflect-name=phf-delete]')
            .click()

        cy.get('.toolbar-title')
            .should('contain', 'Accueil')
    })
})