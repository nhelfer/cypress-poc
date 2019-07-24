/// <reference types="Cypress" />

Cypress.Commands.add('action_phf_login', () => {
    cy.log('ACTION : PHF - Login')
    cy.log('Se connecte à l\'application')

    // Recette
    let url = 'http://84.239.73.82:85'

    // IC
    //let url = 'http://84.239.73.72:85'

    const login = '0'
    const pwd = 'string'

    // Ouverture de la page
    cy.visit(url+"/app/")
    
    cy.get('.toolbar-title')
        .should('contain', 'Connexion')

    cy.get('input[formcontrolname=login]')
        .type(login)

    cy.get('input[formcontrolname=password]')
        .type(pwd)

    cy.contains('connecter')
        .click()

    cy.get('.toolbar-title')
        .should('contain', 'Accueil')

    cy.getCookie('phf-server-login')
        .should('exist')
})