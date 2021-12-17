# language: pt
Funcionalidade: Login
Como um cliente que acessa o marketplace
Paula (standard_user) quer realizar login na página
Para que possa visualizar os produtos

Esquema do Cenario: Fazer login na página
    Dado que eu acesso a pagina
    Quando informo "<usuario>" e "<senha>" e clico em login
    Entao devo conseguir acessar a pagina de produtos
        Exemplos:
        | usuario       | senha        |
        | standard_user | secret_sauce |
        | problem_user  | secret_sauce |

Esquema do Cenario: Fazer login com usuário bloqueado
    Dado que eu acesso a pagina
    Quando informo "<usuario>" e "<senha>" e clico em login
    Entao devo receber uma mensagem de bloqueio
        Exemplos:
        | usuario         | senha        |
        | locked_out_user | secret_sauce |