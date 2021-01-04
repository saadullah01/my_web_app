describe('Blog posts', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Great success!')
  });
});
