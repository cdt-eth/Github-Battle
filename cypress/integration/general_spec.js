describe('Github Battle', function() {
  it('Visits the app', function() {
    cy.visit('http://localhost:8080');
  });

  // Check all nav pages
  it('Clicks Battle in nav', function() {
    cy
      .get('.nav')
      .contains('Battle')
      .click();
  });
  it('Clicks Popular in nav', function() {
    cy
      .get('.nav')
      .contains('Popular')
      .click();
  });
  it('Clicks Home in nav', function() {
    cy
      .get('.nav')
      .contains('Home')
      .click();
  });

  // Move into Battle sequence
  it('Clicks homepage battle button', function() {
    cy
      .get('.homeButton')
      .contains('Battle')
      .click();
  });
  it('Visits Battle page', function() {
    cy.url('http://localhost:8080/battle');
  });

  // Load both users successfully
  it('Inputs user 1', function() {
    cy
      .get('input:first')
      .type('christiandavidturner')
      .should('have.value', 'christiandavidturner');
  });
  it('Submits user 1', function() {
    cy.get(':nth-child(1) > .button').click();
  });
  it('Inputs user 2', function() {
    cy
      .get('#username')
      .type('torchcodelab')
      .should('have.value', 'torchcodelab');
  });
  it('Submits user 2', function() {
    cy.get(':nth-child(2) > .button').click();
  });

  // Initiate battle once both users are present
  it('Clicks battle button', function() {
    cy
      .get('.button')
      .contains('Battle')
      .click();
  });

  // Back to Popular page to check all languages
  it('Visits Popular page', function() {
    cy.get(':nth-child(3) > a').click();
  });
  it('Runs through all languages', function() {
    cy // Javascript
      .get('.languages > :nth-child(2)')
      .wait(2000)
      .click();
    cy // Ruby
      .get('.languages > :nth-child(3)')
      .wait(2000)
      .click();
    cy // Java
      .get('.languages > :nth-child(4)')
      .wait(2000)
      .click();
    cy // CSS
      .get('.languages > :nth-child(5)')
      .wait(2000)
      .click();
    cy // Python
      .get('.languages > :nth-child(6)')
      .wait(2000)
      .click();
    //   ________test 1st Python repo________
    //     cy.get(':nth-child(1) > .space-list-items > :nth-child(2) > a > .linkSpan').click();
  });
});
