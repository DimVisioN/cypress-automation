Cypress.Commands.add('getLoginForm', () => {
    return cy.get('.login-form');
});

Cypress.Commands.add('getLoginMailField', () => {
    return cy.get('#inputEmail');
});

