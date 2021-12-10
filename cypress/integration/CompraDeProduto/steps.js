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