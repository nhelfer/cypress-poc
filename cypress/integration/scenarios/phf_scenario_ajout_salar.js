/// <reference types="Cypress" />

describe('PHF - Scénario Ajout Salarié', function() {

    //Clean
    require('../actions/phf_clean.js')
    
    // Connexion
    require('../actions/phf_login.js')

    // Accès à la page des salariés
    require('../actions/phf_menu_salaries.js')

    // Ajout d'un salarié

    // Suppression du salarié créé

    // Déconnexion
    require('../actions/phf_logout.js')

})