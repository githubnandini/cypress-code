describe('Cypress test', () => {
    it('Visit Quint website and search for text Let the Content Renaissance begin', () => {
      cy.visit('https://www.google.com/')     

      cy.get('input.gLFyf') 
      .type('Quintype')  

      cy.get('input.gNO89b').contains('Google Search').click() 
      cy.get('h3').find('span').first().should('contain', 'Quintype').click()
      cy.get('h1').should('contain', 'Let the Content Renaissance begin.')
    })
  })