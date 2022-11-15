const loginHelper = (username, password) => {
    cy.visit('/');
    // cy.wait(500)
    cy.get('[data-cy="username"]').click();
    cy.get('[data-cy="username"]').type(username);
    cy.get('[data-cy="password"]').click;
    cy.get('[data-cy="password"]').type(password);
    cy.get('[data-cy="button"]').click
}