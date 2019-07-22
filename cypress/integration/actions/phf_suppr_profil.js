/// <reference types="Cypress" />

// Prérequis : Page d'administration ouverte

var profilToDelete = "E2E_2018-11-19_00-46-01"

describe('PHF - Suppression Profil', function() {
    it('Crée un nouveau profil', function() {
        cy.expect('page-administration')
            .to.exist

        // On va sur l'onglet Profils
        cy.get('.phf-tabs > a')
            .contains('Profils')
            .click()

        cy.get('.selected')
            .contains('Profils')
            .should('exist')

        cy.get('.selected')
            .contains('Profils')
            .click()

        cy.get('ion-icon[ng-reflect-name=phf-delete] > input[ng-reflect-model='+profilToDelete+']')
            .next('ion-icon[ng-reflect-name=phf-delete]')
            .click()

        cy.get('.toolbar-title')
            .should('contain', 'Accueil')
    })
})