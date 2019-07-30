/// <reference types="Cypress" />

describe('PHF - Scénario Ajout Salarié', function() {

    it('Clean', function() {  
        cy.action_phf_clean()
    })

    
    it('Connexion', function() {  
        cy.action_phf_login()
    })
    

    it('Accès à la page salariés', function() {  
        cy.action_phf_menu_salaries()
    })


    it('Ajout d\'un salarié', function() {  
        cy.action_phf_ajout_salarie()
    })


    it('Retour à la page d\'accueil', function() {  
        cy.action_phf_retour()
    })


    it('Accès à la page salariés', function() {  
        cy.action_phf_menu_salaries()
    })


    it('Suppression du salarié créé', function() {  
        cy.action_phf_suppr_salarie()
    })

    
    it('Retour à la page d\'accueil', function() {  
        cy.action_phf_retour()
    })

})