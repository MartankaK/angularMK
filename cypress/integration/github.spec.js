/// <reference types="cypress" />

const { Input } = require("@angular/core")

context('github', () => {
  beforeEach(() => {
    cy.visit('https://github.com/')
  })

  describe('as an offline user', () => {
    it('should find the user profile', () => {
      cy.get('.js-details-target')
        .first()
        .click()
      cy.get('form')
        .get('input[name="q"]')
        .type('MartankaK{enter}')
      cy.get('.menu-item')
        .contains('Users')
        .click()
      cy.wait(500)
      cy.get('.codesearch-results')
        .contains('MartankaK')
        .click()
      cy.url().should('eq', 'https://github.com/MartankaK')
    })

    it('should find Team and GitHub free', () => {
      cy.get('.octicon-three-bars')
        .first()
        .click()
      cy.get('.HeaderMenu-link')
        .contains('Team')
        .click()
      cy.get('.btn-block')
        .contains('Get started for free')
        .click()
      cy.get('form')
        .get('input[name="all_emails"]')
        .click()
    })
  })
})
