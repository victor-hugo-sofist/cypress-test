Given("que eu acesso a pagina", () => {
    cy.visit('https://www.saucedemo.com/');
});
When("informo {string} e {string}", (usuario, senha) => {
    cy.get('[id="user-name"]').type(usuario);
    cy.get('[id="password"]').type(senha);
});
And("clico em login",() => {
    cy.get('[id="login-button"]').click();
});
Then("devo conseguir acessar a pagina de produtos", () =>{
    cy.get('[class="title"]')
    .should('contain', 'Product');
});