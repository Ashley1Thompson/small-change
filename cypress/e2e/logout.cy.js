import { loginHelper } from "../e2e/utils/login"

describe('Login in and log a good deed', () => {
    beforeEach(() => {
        loginHelper("canslercp", "coffeesogood123")
    })

    it('should logout the user and return to login page', () => {
        cy.get('[data-cy="logout-button"]').click()
        cy.url().should('include', '/')
    })
})