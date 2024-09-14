describe('Ui and visual tests', () => {

    it('verify elements visibility and state', () => {
        cy.visit('https://demo.x-cart.com/demo/home.php')
        cy.contains('Featured products').should('be.visible')
        cy.get("div[class='highlight last item'] a[class='product-title']").should('have.class','product-title')
        cy.get('.menu-fancy-categories-list > .title-bar > h2').should('have.text','Categories')
        cy.get('.line3 > .search > form > .search-button').should('be.enabled')
        cy.get("div[class='menu-dialog menu-manufacturers'] h2").should('be.visible')
        cy.get('.bestsellers-cell > .menu-dialog > .title-bar > h2').should('contain.text','Best')
    })
})
