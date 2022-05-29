// https://docs.cypress.io/api/table-of-contents

describe('Home page', () => {
    it('Visits home page', () => {
        cy.visit('/')
        cy.contains('#home', 'Hello, World!')
    })
})
