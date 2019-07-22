/// <reference types="Cypress" />

// Prérequis : Page d'administration ouverte

//var now = Cypress.moment().format('YYYY-MM-DD_HH-MM-SS')
var now = "E2E_2018-11-19_00-46-01"

describe('PHF - Ajout Profil', function() {
    it('Crée un nouveau profil', function() {
        cy.expect('page-administration')
            .to.exist

        // On va sur l'onglet Profils
        /*cy.get('.phf-tabs > a')
            .contains('Profils')
            .click()*/

        cy.get('.selected')
            .contains('Profils')
            .should('exist')
        
        // On attend le chargement de la liste des profils
        cy.get('.page-admin-profil').should('exist')    //sync
        cy.get('.flex-container').should('exist')    //sync
        cy.get('ion-icon[aria-label="phf delete"]').should('exist')    //sync

        const nbProfilDefault = cy.get('.page-admin-profil').find('>ion-icon').length
        debugger

        // Remplir le formulaire et valider

        cy.get('.button')
            .contains('Ajouter')
            .should('exist')

        cy.get('.button')
            .contains('Ajouter')
            .click()

        const nbProfilNew = cy.get('ion-icon[aria-label="phf delete"]').length

        expect(nbProfilNew).equals(nbProfilDefault+1)

        if (nbProfilNew = nbProfilDefault+1) {
            cy.get('.block-item ng-star-inserted > input').last()
                .type('E2E_'&now)

            cy.get('.button')
                .contains('Valider')
                .click()
        } else {
            // Stop the test
        }
    })
})