/// <reference types="cypress" />

const { Input } = require("@angular/core")

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
      // cy.wait(1000)
      // cy.get('li')
      //   .contains('Organizing Tests')
      //   .click()
      // cy.location().should((location) => {
      //   expect(location.href).to.eq('https://www.youtube.com/playlist?list=PLP9o9QNnQuAYYRpJzDNWpeuOVTwxmIxcI')
      // })
    })
  })

})
