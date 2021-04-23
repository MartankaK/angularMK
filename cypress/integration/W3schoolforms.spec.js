/// <reference types="cypress" />

const { Input } = require("@angular/core")

context('w3schools', () => {
  beforeEach(() => {
    cy.visit('https://www.w3schools.com/html/html_forms.asp')
    cy.contains('Accept all').click()
  })

  describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
      cy.get('.w3-white')
        .find('form label:first')
        .should('contain', 'First name')
      cy.get('form')
        .get('input[name="fname"]')
        .first()
        .clear()
        .type('Martina')
      cy.get('form')
        .get('input[name="lname"]')
        .first()
        .clear()
        .type('Kohutova')
      cy.get('form')
        .get('input[value="Submit"]')
        .first()
        .click()
      // https://www.w3schools.com/action_page.php?fname=Martina&lname=Kohutova

      it('.should() - go to different page', () => {
        cy.contains('SQL')
          .click()
        cy.location().should((location) => {
          expect(location.href).to.eq('https://www.w3schools.com/sql/default.asp')
        })
      })
    })
  })

})
