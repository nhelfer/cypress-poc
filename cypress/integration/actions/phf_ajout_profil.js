/// <reference types="Cypress" />

// Prérequis : Page d'administration ouverte

//var now = Cypress.moment().format('YYYY-MM-DD_HH-MM-SS')
var now = "E2E_2018-11-19_00-46-01"

describe('PHF - Ajout Profil', function() {
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
        
        var nbProfilDefault = cy.find('ion-icon[ng-reflect-name=phf-delete]').length()

        // Remplir le formulaire et valider

        cy.get('.button')
            .contains('Ajouter')
            .should('exist')

        cy.get('.button')
            .contains('Ajouter')
            .click()

        var nbProfilNew = cy.find('ion-icon[ng-reflect-name=phf-delete]').length()

        expect(nbProfilNew).to.be(nbProfilDefault+1)

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