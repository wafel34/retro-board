describe('Authentication', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200')
  });

  it('should login a user', () => {
    cy.get('.login')
  });
})
