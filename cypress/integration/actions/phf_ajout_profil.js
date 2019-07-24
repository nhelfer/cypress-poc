/// <reference types="Cypress" />

// Prérequis : Page d'administration ouverte

Cypress.Commands.add('action_phf_ajout_profil', () => {
    var now = Cypress.moment().format('YYYY-MM-DD_HH-MM-SS')
    //var now = "2018-11-19_00-46-01"
    var profilToAdd = "E2E_".concat(now)

    cy.log('PHF - Ajout Profil')
    cy.log('Crée un nouveau profil')

    cy.get('.ion-md-phf-delete').should('exist')    //sync

    cy.get('.ion-md-phf-delete').then(($defaultItems) => {
        const nbProfilDefault = $defaultItems.length
        
        cy.get('button:contains("Ajouter")').click()

        cy.get('.ion-md-phf-delete').then(($newItems) => {
            const nbProfilNew = $newItems.length

            expect(nbProfilNew, "On doit avoir un champ profil en plus").equals(nbProfilDefault+1)

            if (nbProfilNew == nbProfilDefault+1) {
                cy.get('.input-libelle').last()
                    .type(profilToAdd)
                
                cy.get('.button')
                    .contains('Valider')
                    .click()
            } else {
                // Stop the test
            }
        })
    })
})