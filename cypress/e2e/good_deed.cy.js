import { loginHelper } from "../e2e/utils/login"

const goodDeed = "I pulled over to help someone with their car trouble"

describe('Login in and log a good deed', () => {
    beforeEach(() => {
        loginHelper("canslercp", "coffeesogood123")
    })

    it("should flip the coin and log a good deed", () => {
        cy.get('[data-cy="coin-flip"]').click()
        cy.wait(500)
        cy.get('[data-cy="good-deed"]').click()
        cy.get('[data-cy="good-deed"]').type(goodDeed)
        cy.get('[data-cy="form-submit"]').click()
        cy.get('[data-cy="profile-button"]').click()
        cy.get('[data-cy="good-deeds"]')
          .should('contain', goodDeed)
    })
})