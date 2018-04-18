describe('Github Battle', function() {
  it('Visits the app', function() {
    cy.visit('http://localhost:8080');
  });

  // ___________________________________________
  // ______________CHECK NAV PAGES______________
  // ___________________________________________
  it('Clicks Battle in nav & visits page', function() {
    cy
      .get('.nav')
      .contains('Battle')
      .click();
    cy.url().should('eq', 'http://localhost:8080/battle');
  });

  it('Clicks Popular in nav & visits page', function() {
    cy
      .get('.nav')
      .contains('Popular')
      .click();
    cy.url().should('eq', 'http://localhost:8080/popular');
  });

  it('Clicks Home in nav & visits page', function() {
    cy
      .get('.nav')
      .contains('Home')
      .click();
    cy.url().should('eq', 'http://localhost:8080/');
  });

  it('Visits non-existent page', function() {
    cy.visit('http://localhost:8080/home');
  });

  it('Clicks Home in nav & visits page', function() {
    cy
      .get('.nav')
      .contains('Home')
      .click();
    cy.url().should('eq', 'http://localhost:8080/');
  });

  // _______________________________________
  // ____________BATTLE SEQUENCE____________
  // _______________________________________
  it('Clicks homepage battle button & visits page', function() {
    cy
      .get('.homeButton')
      .contains('Battle')
      .click();
    cy.url().should('eq', 'http://localhost:8080/battle');
  });

  // ________________________________________
  // _____LOAD BOTH USERS UNSUCCESSFULLY_____
  // ________________________________________
  it('Inputs user 1', function() {
    cy
      .get('input:first')
      .type('reallyfakeusername')
      .should('have.value', 'reallyfakeusername');
  });

  it('Submits user 1', function() {
    cy.get(':nth-child(1) > .button').click();
  });

  it('Inputs user 2', function() {
    cy
      .get('#username')
      .type('anotherfakeusername')
      .should('have.value', 'anotherfakeusername');
  });

  it('Submits user 2', function() {
    cy.get(':nth-child(2) > .button').click();
  });

  it('Clicks battle button', function() {
    cy
      .get('.button')
      .contains('Battle')
      .click();
  });

  // ________________________________________
  // ______________RESET BATTLE______________
  // ________________________________________
  it('Clicks reset button', function() {
    cy
      .get('.button')
      .contains('Reset')
      .click();
  });

  // ___________________________________________________
  // ___LOAD LEFT SUCCESSFULLY & RIGHT UNSUCCESSFULLY___
  // ___________________________________________________
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
      .type('reallyfakeusername')
      .should('have.value', 'reallyfakeusername');
  });

  it('Submits user 2', function() {
    cy.get(':nth-child(2) > .button').click();
  });

  it('Clicks battle button', function() {
    cy
      .get('.button')
      .contains('Battle')
      .click();
  });

  // ________________________________________
  // ______________RESET BATTLE______________
  // ________________________________________
  it('Clicks reset button', function() {
    cy
      .get('.button')
      .contains('Reset')
      .click();
  });

  // ___________________________________________________
  // ___LOAD LEFT UNSUCCESSFULLY & RIGHT SUCCESSFULLY___
  // ___________________________________________________
  it('Inputs user 1', function() {
    cy
      .get('input:first')
      .type('reallyfakeusername')
      .should('have.value', 'reallyfakeusername');
  });

  it('Submits user 1', function() {
    cy.get(':nth-child(1) > .button').click();
  });

  it('Inputs user 2', function() {
    cy
      .get('#username')
      .type('christiandavidturner')
      .should('have.value', 'christiandavidturner');
  });

  it('Submits user 2', function() {
    cy.get(':nth-child(2) > .button').click();
  });

  it('Clicks battle button', function() {
    cy
      .get('.button')
      .contains('Battle')
      .click();
  });

  // ________________________________________
  // ______________RESET BATTLE______________
  // ________________________________________
  it('Clicks reset button', function() {
    cy
      .get('.button')
      .contains('Reset')
      .click();
  });

  // ____________________________________
  // ____LOAD BOTH USERS SUCCESSFULLY____
  // ____________________________________
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

  it('Clicks battle button', function() {
    cy
      .get('.button')
      .contains('Battle')
      .click();
  });

  // _____________________________
  // _____STARTS A NEW BATTLE_____
  // _____________________________
  it('Clicks battle again button', function() {
    cy
      .get('.battleAgain')
      .contains('Battle again')
      .click();
  });

  // _____________________________________________
  // _______CHECK LANGUAGES ON POPULAR PAGE_______
  // _____________________________________________
  it('Visits Popular page', function() {
    cy
      .get('.nav')
      .contains('Popular')
      .click();
    cy.url().should('eq', 'http://localhost:8080/popular');
  });

  it('Runs through all languages', function() {
    cy
      .get('.languages > :nth-child(2)')
      .contains('Javascript')
      .wait(2000)
      .click();
    cy
      .get('.languages > :nth-child(3)')
      .contains('Ruby')
      .wait(2000)
      .click();
    cy
      .get('.languages > :nth-child(4)')
      .contains('Java')
      .wait(2000)
      .click();
    cy
      .get('.languages > :nth-child(5)')
      .contains('CSS')
      .wait(2000)
      .click();
    cy
      .get('.languages > :nth-child(6)')
      .contains('Python')
      .wait(2000)
      .click();
  });
});
