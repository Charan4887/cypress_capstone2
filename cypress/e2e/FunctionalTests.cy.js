describe('Functional tests', () => {

    it('user interactions and application workflows', () => {

     //user login

      cy.visit('https://demo.x-cart.com/demo/login.php')
  
      cy.get('#username').clear().type('demo-customer@x-cart.com')

      cy.get('#password').clear().type('customer')

      cy.get('.button-left').click()

      cy.get('.name').should('have.text','(Mr. John Smith)')

      cy.get('.header-links > [href="/demo/login.php?mode=logout"]').should('be.visible')


      //product search adding items to the cart

      cy.get("div[class='line3'] input[placeholder='Enter keyword...']").type('iphone')

      cy.get("div[class='line3'] button[type='submit']").click()

   
      //adding items to the cart

      cy.get('.first > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left > .fa').click()

      //checkout process

      cy.get('.proceed-to-checkout').click()

      cy.get('#accept_terms').click()
      
      cy.get('.button-left').click()

      cy.get('.text-block').should('contain.text','Congratulations')




    })

})