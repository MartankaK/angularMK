/// <reference types="cypress" />

context('npm', () => {
  beforeEach(() => {
    cy.visit('https://npmjs.com/')
  })

  describe('as an offline user ', () => {
    it('should find the nonexistent package martinka', () => {
      cy.intercept({
        method: 'GET',
        url: '**/suggestions*'
      }, { fixture: 'npm-search.json' }).as('getSearch')
      cy.get('form')
        .get('input[name="q"]')
        .type('Martinka')
        .wait('@getSearch')
      cy.get('.pointer')
        .contains('cypress')
    })
  })
})
