describe('Edge cases', () => {

    it('login with invalid credintials', () => {
      cy.visit('https://demo.x-cart.com/demo/login.php')
      cy.get('#username').clear().type('demo-custome@x-cart.com')
      cy.get('#password').clear().type('custoer')
      cy.get('.button-left').click()
      cy.get('#top-message > .box').should('contain.text','incorrect Email or Password')
      //invalid product searching
      cy.get("div[class='line3'] input[placeholder='Enter keyword...']").type('animal')
      cy.get("div[class='line3'] button[type='submit']").click()
      cy.get('#top-message > .box').should('contain.text','Try again with different criteria')
    })

})
