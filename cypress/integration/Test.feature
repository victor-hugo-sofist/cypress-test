# language: pt
Funcionalidade: Test
Desafio Cypress com Cucumber


Esquema do Cenario: Fazer login na página
    Dado que eu acesso a pagina
    Quando informo "<usuario>" e "<senha>"
    E clico em login
    Entao devo conseguir acessar a pagina de produtos
        Exemplos:
        | usuario       | senha        |
        | standard_user | secret_sauce |
        | problem_user  | secret_sauce |


Esquema do Cenario: Fazer login com usuário bloqueado
    Dado que eu acesso a pagina
    Quando informo "<usuario>" e "<senha>"
    E clico em login
    Entao devo receber uma mensagem de bloqueio
        Exemplos:
        | usuario         | senha        |
        | locked_out_user | secret_sauce |

Esquema do Cenario: Verificar conteúdo da página de produtos
    Dado que eu acesso a pagina
    Quando informo "<usuario>" e "<senha>"
    E clico em login
    Entao o conteúdo da página deve estar correto
        Exemplos:
        | usuario         | senha        |
        | standard_user   | secret_sauce |
        | problem_user    | secret_sauce |


Esquema do Cenario: Realizar uma compra com sucesso e voltar para a página de produtos
    Dado que eu acesso a pagina
    Quando informo "<usuario>" e "<senha>"
    E clico em login
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