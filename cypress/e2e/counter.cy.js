describe('template spec', () => {
  it('First test', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Counter Component', () => {
  it('increments the counter when the "Increment" button is clicked', () => {
    cy.visit('http://localhost:3000');
    cy.get('.counter-button-inc').click();
    cy.get('.counter-container').should('contain', 'Counter Value: 1');
    cy.get('.counter-button-inc').click();
    cy.get('.counter-container').should('contain', 'Counter Value: 2');
  });

  it('decrements the counter when the "Decrement" button is clicked', () => {
    cy.visit('http://localhost:3000');
    cy.get('.counter-button-dec').click();
    cy.get('.counter-container').should('contain', 'Counter Value: -1');
    cy.get('.counter-button-dec').click();
    cy.get('.counter-container').should('contain', 'Counter Value: -2');
  });
});

