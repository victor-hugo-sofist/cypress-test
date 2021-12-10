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