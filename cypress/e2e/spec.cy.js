// Check based on "Given, When, Then" or "Arrange, Act, Assert"
describe('Click Link & Check URL', () => {
    // Define link
    beforeEach(() => {
        // Given
        cy.visit('/');
    })

    context("Click Section", () => {
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

    context("Check Header", () => {

        it('T003', () => {
            // cy.get('h1').contains('Kitchen Sink');
            cy.contains('closest').click();
            cy.location('pathname').should('equal',"/commands/traversal")
        })
    })


})
