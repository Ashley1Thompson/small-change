// const { isEmptyObject } = require("cypress/types/jquery")

describe('The Home Page', () => {
    it('successfuly loads', () => {
        cy.visit('/')
    })
})