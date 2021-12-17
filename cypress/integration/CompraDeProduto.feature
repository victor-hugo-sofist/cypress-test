# language: pt
Funcionalidade: CompraDeProduto
Como um cliente que acessa um marketplace
Paula quer realizar o pedido de um produto
Para que possa receber o item

Esquema do Cenario: Realizar uma compra com sucesso e voltar para a página de produtos
    Dado que eu acesso a pagina
    Quando informo "<usuario>" e "<senha>" e clico em login
    E adiciono a mochila no carrinho
    E clico no carrinho
    E faço checkout
    E faço o cadastro
    E finalizo a compra
    Entao devo receber a mensagem agradecendo o pedido 
    E clicando no botão home
    Entao devo conseguir acessar a pagina de produtos

        Exemplos:
        | usuario         | senha        |
        | standard_user   | secret_sauce |
        | problem_user    | secret_sauce |