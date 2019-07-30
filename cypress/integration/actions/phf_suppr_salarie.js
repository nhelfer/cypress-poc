/// <reference types="Cypress" />

// Prérequis : Page d'administration ouverte

Cypress.Commands.add('action_phf_suppr_profil', () => {

    cy.log('PHF - Suppression Salarie')
    cy.log('Supprime le dernier salarie')

    cy.get('.ion-md-phf-delete').should('exist')    //sync

    cy.get('.ion-md-phf-delete').then(($defaultItems) => {
        const nbSalarDefault = $defaultItems.length
        
        // On clique sur le bouton suppression
        cy.get('.ion-md-phf-delete')
            .last()
            .parent('span')
            .click()
        
        // On doit être redirigé vers la page d'accueil
        cy.get('.toolbar-title')
            .should('contain', 'Accueil')
        
        // Accès à la page salariés
        cy.action_phf_menu_salaries()

        cy.get('.ion-md-phf-delete').then(($newItems) => {
            const nbSalarNew = $newItems.length

            expect(nbSalarNew, "On doit avoir un champ salarie en moins").equals(nbSalarDefault-1)
        })
    })
})