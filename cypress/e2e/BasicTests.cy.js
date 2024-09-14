describe('Basic tests', () => {
  
    it('Verify the home page title and content', () => {
      cy.visit('https://demo.x-cart.com/demo/home.php')
      cy.url().should('include','home.php')
      cy.title().should('include', 'Your Company Name')
      cy.get("div[class='title'] h2").should('contain.text','Featured products')
      cy.get("div[class='menu-dialog menu-fancy-categories-list'] h2").should('be.visible')
    })
  })