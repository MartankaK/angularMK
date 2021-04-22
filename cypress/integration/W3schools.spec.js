/// <reference types="cypress" />

context('w3schools', () => {
  beforeEach(() => {
    cy.visit('https://www.w3schools.com/html/html_tables.asp')
    cy.contains('Accept all').click()
  })

  describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
      // https://on.cypress.io/should
      cy.get('#customers')
        .find('tbody tr:last td:last')
        .should('contain', 'Italy')
        //   // checking the text of the <td> element in various ways
        .should('have.text', 'Italy')
        .should('contain', 'Italy')

      cy.get('#customers')
        .find('tbody tr:first th:last')
        .should('contain', 'Country')
        //   // checking the text of the <th> element in various ways
        .should('have.text', 'Country')
        .should('contain', 'Country')
      // cy.contains('Try it').click()
    })
  })

})
