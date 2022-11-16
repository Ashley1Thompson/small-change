// const { isEmptyObject } = require("cypress/types/jquery")

import { loginHelper } from "../e2e/utils/login"

describe('Login in and visit profile page', () => {
    beforeEach(() => {
        loginHelper("canslercp", "coffeesogood123")
    })
    
    it("successfuly load the user's profile page", () => {
        cy.get('[data-cy="profile-button"]').click()
        cy.url().should('include', '/userProfile')
    })
})