# language: pt
Funcionalidade: ConteudoPaginaDeProdutos
Como um cliete que acessa a pagina de produtos de um marketplace
Paula quer visualizar as imagens dos produtos
Para que possa tomar sua decisão de compra

Esquema do Cenario: Verificar conteúdo da página de produtos
    Dado que eu acesso a pagina
    Quando informo "<usuario>" e "<senha>" e clico em login
    Entao o conteúdo da página deve estar correto
        Exemplos:
        | usuario         | senha        |
        | standard_user   | secret_sauce |
        | problem_user    | secret_sauce |