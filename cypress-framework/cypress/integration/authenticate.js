describe('Cypress test', () => {
    it('Check news feed', () => {
      cy.visit('https://soumya.madrid.quintype.io/')   

      cy.get('.header-four-m__layer-2__lEm60 .search').click()  
      cy.get('.header-four-m__layer-2__lEm60 .search-form-input').type("india").type('{enter}')
      cy.get('.search-page-m__placeholder__1YuuK').click()
      cy.get('.search-page-m__select__2it3z li').eq(1).should('contain', 'Newest').click()
      cy.get('.list-component-m__one-col-border-default__b-CBa').first().should('contain','Ekta Patnaik')
      cy.get('.list-component-m__one-col-border-default__b-CBa').eq(3).should('contain','Ekta Patnaik')
    })
})