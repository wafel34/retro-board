describe('Authentication', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200')
  });

  it('should login a user', () => {
    cy.callFirestore("add", "retro-board-f7506test_hello_world", { some: "value" });
  });
})
