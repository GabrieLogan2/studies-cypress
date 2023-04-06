Cypress.Commands.add('Login', function(){
     //Access login screen simulating button click
     cy.contains('a', 'Login').click()
    //Simulate user typing interaction
    cy.get('#email').type('gabriellogan4@gmail.com')
    cy.get('#senha').type('biel@123')
    //Simulate button click
    cy.get('.btn').click()
})