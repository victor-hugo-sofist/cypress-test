Then("devo receber uma mensagem de bloqueio", () =>{
    cy.get('[data-test="error"]')
    .should('contain', 'Epic sadface: Sorry, this user has been locked out.');
});