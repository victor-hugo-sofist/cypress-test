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
Then("devo receber uma mensagem de bloqueio", () =>{
    cy.get('[data-test="error"]')
    .should('contain', 'Epic sadface: Sorry, this user has been locked out.');
});
Then("o conteúdo da página deve estar correto", () =>{

    cy.get('[id="item_0_img_link"]').children()
    .should('have.attr', 'src')
    .and('equal','/static/media/bike-light-1200x1500.a0c9caae.jpg');

    cy.get('[id="item_1_img_link"]').children()
    .should('have.attr', 'src')
    .and('equal','/static/media/bolt-shirt-1200x1500.c0dae290.jpg'); 

    cy.get('[id="item_2_img_link"]').children()
    .should('have.attr', 'src')
    .and('equal','/static/media/red-onesie-1200x1500.1b15e1fa.jpg'); 
    
    cy.get('[id="item_3_img_link"]').children()
    .should('have.attr', 'src')
    .and('equal','/static/media/red-tatt-1200x1500.e32b4ef9.jpg');
    
    cy.get('[id="item_4_img_link"]').children()
    .should('have.attr', 'src')
    .and('equal','/static/media/sauce-backpack-1200x1500.34e7aa42.jpg'); 
    
    cy.get('[id="item_5_img_link"]').children()
    .should('have.attr', 'src')
    .and('equal','/static/media/sauce-pullover-1200x1500.439fc934.jpg'); 
});
And("adiciono a mochila no carrinho", () =>{
    cy.get('[id="add-to-cart-sauce-labs-backpack"]')
    .click();
});
And("clico no carrinho", () =>{
    cy.get('[class="shopping_cart_link"]')
    .click();
});
And("faço checkout", () =>{
    cy.get('[id="checkout"]')
    .click();
});
And("faço o cadastro", () =>{
    cy.get('[id="first-name"]').type('Hebe');
    cy.get('[id="last-name"]').type('Camargo');
    cy.get('[id="postal-code"]').type('99999999');
    cy.get('[id="continue"]')
    .click();
});
And("finalizo a compra", () =>{
    cy.get('[id="finish"]')
    .click();
});
Then("devo receber a mensagem agradecendo o pedido", () =>{
    cy.get('.complete-header')
    .should('text', 'THANK YOU FOR YOUR ORDER');
});
And("clicando no botão home", () =>{
    cy.get('[data-test="back-to-products"]')
    .click();
});