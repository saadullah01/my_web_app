const posts = require('../../src/routes/blog/_posts').default;
describe('Blog posts', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Great success!')
  });

  posts.forEach(post => {
    it(`lists the "${post.title}" blog post`, () => {
      cy
        .contains('[data-cy=blog-posts-list] li a', post.title)
        .should('have.attr', 'href', `blog/${post.slug}`)
    })
  });
});
