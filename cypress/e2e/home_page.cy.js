// const { isEmptyObject } = require("cypress/types/jquery")

import { loginHelper } from "../e2e/utils"



describe('The Home Page', () => {
    it('successfuly loads', () => {
        cy.visit('/')
    })
})