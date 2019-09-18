describe('The demo site', () => {
    /*
    * Keep in mind that all Cypress functions are promises which get retried until a timeout is reached.
    * Also, in Cypress, contrary to other frameworks, making more than one assertion per test is considered a good practice.
    */
    it('should visit the website', () => {
        // Arrange
        cy.visitWebsite();
        // Act
        cy.fixture('credentials')
            .then(credentials => {
                cy.get('#inputEmail').type(credentials.email);
                cy.get('#inputPassword').type(credentials.password);
            });
        cy.get('[name="rememberme"]').click();
        cy.get('#login').click();
        // Assert
        cy.get('.header-lined').should(($header) => {
            const text = $header.text();
            expect(text).to.include('Login');
            expect(text).to.include('This page is restricted');
            expect(text).to.not.include('\n'); // Should intentionally fail
        });
    });
});