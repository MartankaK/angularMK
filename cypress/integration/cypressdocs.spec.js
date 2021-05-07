/// <reference types="cypress" />

context('cypressdocs', () => {
  beforeEach(() => {
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
  })
  describe('as offline user', () => {
    it('.should() - find videos through search', () => {
      cy.wait(500)
      cy.get('.DocSearch-Button-Placeholder')
        .contains('Search')
        .click()
      cy.wait(500)
      cy.get('#docsearch-input')
        .type('videos')
        .wait(1000)
        .type('{enter}')
    })

    it('.should() - find tutorial videos', () => {
      cy.wait(1000)
      cy.get('button.inline-flex')
        .click()
      cy.get('.text-base')
        .contains('Examples')
        .click()
      cy.wait(500)
      cy.get('button.inline-flex')
        .click()
      cy.get('.rounded-md')
        .contains('Tutorial Videos')
        .click()
    })
  })

})
