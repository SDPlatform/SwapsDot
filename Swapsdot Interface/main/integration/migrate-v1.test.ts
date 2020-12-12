describe('Migrate V1 Liquidity', () => {
  describe('Remove V1 liquidity', () => {
    it('renders the correct page', () => {
      cy.visit('/remove/v1/)
      cy.get('#remove-v1-exchange').should('contain', 'MKR/ETH')
    })
  })
})
