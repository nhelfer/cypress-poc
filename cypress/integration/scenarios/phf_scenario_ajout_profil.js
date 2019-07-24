/// <reference types="Cypress" />

describe('PHF - Scénario Ajout Salarié', function() {

    it('Clean', function() {  
        cy.action_phf_clean()
    })

    
    it('Connexion', function() {  
        cy.action_phf_login()
    })
    

    it('Accès à la page d\'administration', function() {  
        cy.action_phf_menu_admin()
    })


    it('Ajout d\'un profil', function() {  
        cy.action_phf_ajout_profil()
    })


    it('Retour à la page d\'accueil', function() {  
        cy.action_phf_retour()
    })


    it('Accès à la page d\'administration', function() {  
        cy.action_phf_menu_admin()
    })


    it('Suppression du profil créé', function() {  
        cy.action_phf_suppr_profil()
    })


    it('Déconnexion', function() {  
        cy.action_phf_logout()
    })
    
})