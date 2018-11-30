/// <reference types="Cypress" />

describe('PHF - Login', function() {
    it('Se connecte à l\'application', function() {

        // Recette
        //let url = 'http://5.153.53.197:85'

        // IC
        let url = 'http://159.122.36.22:85'

        let login = '0'
        let pwd = 'string'

        // Ouverture de la page
        cy.visit(url+"/app/")
        
        cy.get('.toolbar-title')
            .should('contain', 'Connexion')

        cy.get('input[formcontrolname=login]')
            .type(login)

        cy.get('input[formcontrolname=password]')
            .type(pwd)

        cy.contains('button', 'connecter')
            .click()

        cy.get('.toolbar-title')
            .should('contain', 'Accueil')


    })
})