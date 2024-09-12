describe('Custom commands', () => {


    it('using custom command for  login', () => {

    cy.login('demo-customer@x-cart.com','customer')

    cy.get('.name').should('have.text','(Mr. John Smith)')


    })

})
