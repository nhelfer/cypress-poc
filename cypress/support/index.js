// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './actions'
import 'cypress-promise/register'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Conserve les cookies de connexion entre les tests
beforeEach(function () {
    Cypress.Cookies.preserveOnce('phf-server-login')
})

// Stoppe l'exécution en cas de test fail
afterEach(function() {
    if (this.currentTest.state === 'failed') {
        Cypress.runner.stop()
    }
});