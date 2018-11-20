/// <reference types="Cypress" />

describe('PHF - Scénario Ajout Salarié', function() {
    // Connexion
    require('../actions/phf_login.js')

    // Accès à la page d'administration
    require('../actions/phf_menu_admin.js')

    // Ajout d'un profil
    require('../actions/phf_ajout_profil.js')

    // Suppression du profil créé
    require('../actions/phf_suppr_profil.js')

    // Déconnexion
    require('../actions/phf_logout.js')
    
})