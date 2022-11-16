import {loginHelper} from "../e2e/utils/login"

describe('Login and visit the inspiration page', () => {
    beforeEach(() => {
        loginHelper("canslercp", "coffeesogood123")
    })

    it("successfully loads the inspirations page", () => {
        cy.get('[data-cy="inspiration-button"]').click()
        cy.url().should('include', '/inspiration')

    })
})