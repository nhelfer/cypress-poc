/// <reference types="Cypress" />

describe('PHF - Login', function() {
    it('Se connecte à l\'application', function() {
      cy.visit('http://5.153.53.197/')
  
      cy.contains('Connexion')

      cy.get('input[formcontrolname=login]')
      .type('40')

      cy.get('input[formcontrolname=password]')
      .type('Azer1234')

      cy.contains('button', 'connecter')
      .click()
    })
})