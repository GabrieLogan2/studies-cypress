describe('Studies with Cypress Login/Register - Gabriel Logan', () => {
  beforeEach(() => {
    cy.visit('https://seubarriga.wcaquino.me/cadastro')
  });
  it('Register users with random emails.', () => {
   //Access new user screen simulating button click
    cy.contains('a', 'Novo usuário?').click()

    //Simulate user typing interaction
    cy.get('#nome').type('Testing')
    cy.get('#email').type(`${Date.now()}@gmail.com`)
    cy.get('#senha').type('187228')
    //Simulate button click
    cy.get('input[type="submit"]').click()

    //Testing
    cy.get('.alert').should('be.visible')
  });
  it('Blank fields', () => {
    //Access new user screen simulating button click
    cy.contains('a', 'Novo usuário?').click()
    //Simulate button click
    cy.get('input[type="submit"]').click()

    //Testing
    cy.get('.alert').should('be.visible')
  });
  it('Count error fields', () => {
  //Access new user screen simulating button click
  cy.contains('a', 'Novo usuário?').click()
  //Simulate button click
  cy.get('input[type="submit"]').click() 

  //Count the errors when they appear, confirming their visibility
  cy.get('.alert')
      .should('have.length', 3)
      .each(function($alert){
        cy.wrap($alert).should('be.visible')
      })
  });
  it('Fill in the Name/Email field leaving the password blank', () => {
    //Access new user screen simulating button click
    cy.contains('a', 'Novo usuário?').click()

    //Simulate user typing interaction
    cy.get('#nome').type('Testing')
    cy.get('#email').type('testing@gmail.com')

    //Simulate button click
    cy.get('input[type="submit"]').click() 

    //Testing
    cy.get('.alert').should('be.visible')
  
  });
  it('Fill in the Name/Password field leaving the e-mail blank', () => {
    //Access new user screen simulating button click
   cy.contains('a', 'Novo usuário?').click()

   //Simulate user typing interaction
   cy.get('#nome').type('Testing')
   cy.get('#senha').type('3223')

   //Simulate button click
   cy.get('input[type="submit"]').click() 

   //Testing
   cy.get('.alert').should('be.visible')
 
 });
 it('Fill in the Email/Password field leaving the name blank', () => {
  //Access new user screen simulating button click
 cy.contains('a', 'Novo usuário?').click()

 //Simulate user typing interaction
 cy.get('#email').type('Testing@gmail.com')
 cy.get('#senha').type('3223')

 //Simulate button click
 cy.get('input[type="submit"]').click() 

 //Testing
 cy.get('.alert').should('be.visible')

});
it('Nonexistent user login', () => {
  //Access login screen simulating button click
  cy.contains('a', 'Login').click()
   //Simulate user typing interaction
  cy.get('#email').type('testingnonexistent@gmail.com')
  cy.get('#senha').type('11122')
  
  //Simulate button click
  cy.get('.btn').click()

  //testing
  cy.get('.alert').should('be.visible')
});
it('Access screen with existing login', () => {
  //Access commands.js
   cy.Login()

  //testing
  cy.title().should('be.equal' , 'Seu Barriga - Home')
});
});