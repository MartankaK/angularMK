/// <reference types="cypress" />

const { Input } = require("@angular/core")

context('cypressdocs', () => {
  beforeEach(() => {
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
  })
  describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
      cy.wait(500)
      cy.get('.DocSearch-Button-Placeholder')
        .contains('Search')
        .click()
      cy.wait(500)
      cy.get('#docsearch-input')
        .type('videos')
        .wait(1000)
        .type('{enter}')

      // describe('Implicit Assertions', () => {
      //   it('.should() - make an assertion about the current subject', () => {
      //     cy.get('.sr-only')
      //       .contains('main menu')
      //       .click()
      //     cy.get('.rounded-md')
      //       .contains('Videos')
      //       .click()
      //   })
      //   it('.should() - go to different page', () => {
      //     cy.contains('Tips & Tricks')
      //       .click()
      //     cy.location().should((location) => {
      //       expect(location.href).to.eq('https://www.w3schools.com/sql/default.asp')
      //     })
      // })
    })
  })

})
