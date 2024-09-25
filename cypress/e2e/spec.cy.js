// Check based on "Given, When, Then" or "Arrange, Act, Assert"
describe('Click Link & Check URL', () => {
    // Define link
    beforeEach(() => {
        // Given
        cy.visit('/');
    })

    // Type
    it('T001', () => {
        // When
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
        cy.get('.action-email').type('atrzkk@gmail.com')

        // Then
        cy.get('.action-email').should('have.value', 'atrzkk@gmail.com');
    })

    // Get
    it('T002', () => {
        cy.contains('get').click();
        cy.url().should('include', '/commands/querying')
    })
})
