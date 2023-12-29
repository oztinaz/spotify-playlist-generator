// https://on.cypress.io/api

describe('spotify/ask-authorization', () => {
  it('visits spotify/ask-authorization url', () => {
    cy.visit('/spotify/ask-authorization')
    cy.contains('a', 'Authorize')
  })

  it('visits spotify/ask-authorization url and clicks link', () => {
    cy.visit('/spotify/ask-authorization')
    cy.get('a').click()
  })
})
