/// <reference types="Cypress" />

describe('PHF - Scénario Authentification', function() {

    it('Clean', function() {  
        cy.action_phf_clean()
    })

    
    it('Connexion', function() {  
        cy.action_phf_login()
    })
    

    it('Accès à la page d\'administration', function() {  
        cy.action_phf_menu_admin()
    })


    it('Retour à la page d\'accueil', function() {  
        cy.action_phf_retour()
    })


    it('Déconnexion', function() {  
        cy.action_phf_logout()
    })
    
})