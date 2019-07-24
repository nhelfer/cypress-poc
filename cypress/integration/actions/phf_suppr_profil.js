/// <reference types="Cypress" />

// Prérequis : Page d'administration ouverte

Cypress.Commands.add('action_phf_suppr_profil', () => {

    cy.log('PHF - Suppression Profil')
    cy.log('Supprime le dernier profil')

    cy.get('.ion-md-phf-delete').should('exist')    //sync

    cy.get('.ion-md-phf-delete').then(($defaultItems) => {
        const nbProfilDefault = $defaultItems.length
        
        // On clique sur le bouton suppression
        cy.get('.ion-md-phf-delete')
            .last()
            .parent('span')
            .click()
        
        // On doit être redirigé vers la page d'accueil
        cy.get('.toolbar-title')
            .should('contain', 'Accueil')
        
        // Accès à la page d'administration
        cy.action_phf_menu_admin()

        cy.get('.ion-md-phf-delete').then(($newItems) => {
            const nbProfilNew = $newItems.length

            expect(nbProfilNew, "On doit avoir un champ profil en moins").equals(nbProfilDefault-1)
        })
    })
})