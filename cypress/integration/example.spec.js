/// <reference types="Cypress"/>

describe('Group of test', function() {
  before(function() {
    cy.log('run me on 1 time at all test start')
  })

  before(function() {
    cy.log('run me on 1 time at all test end')
  })

  beforeEach(function() {
    cy.log('run me always time at it is run')
  })

  afterEach(function() {
    cy.log('run me always time at it is run end')
  })

  context('Sub group of test', function() {
    it('test case 1', function() {
      cy.visit('/')
    })

    it('test case 2', function() {
      cy.visit('/')
    })
  })
})
