# QA Developer Test - Ploomes


## 📄 Descrição

<p>Este projeto de automação web com Cypress foi desenvolvido para avaliar habilidades para ser colaborador da Ploomes e fazer parte do time de QA.</p>


## ✅ Funcionalidades testadas
API: </br>
- CRUD Clientes;
- CRUD Negócios;

FRONTEND: </br>
- Login;
- CRUD Clientes;
- CRUD Negócios;
- CRUD Produtos (Automação extra);



##  🛠️ Executando o projeto

<p>Para executar o projeto é necessário:</p>

- Instalar o Git e o Node.js e Clonar o repositório do projeto:

```
https://github.com/eulucasilva/qa-test-ploomes
```
- Abrir pasta onde foi clonado o projeto e executar o comando:

```
npm install
```

- Em seguida, executar o comando abaixo para executar o projeto em modo <i>headless</i>:

```
npm run cy:run
```
## ❗ Relatório gerado (GitHub Actions)

https://eulucasilva.github.io/qa-test-ploomes/


## ❗ Limitações e possíveis melhorias para evolução no sistema

<p>Nos testes de API, foi verificado que não há uma padronização nos status code da requisição, de acordo com o protocolo HTTP. Uma possível melhoria seria ajustar o código de retorno das requisições, de acordo com o HTTP.</p>

<p>Não há preocupação, no desenvolvimento do sistema, com a testabilidade da aplicação. Isto é perceptível ao inspecionar os elementos do frontend e verificar que eles não possuem atributos adicionados especificamente para facilitar a automação dos testes de UI. A adição destes atributos, tais como data-test, data-test-id, data-qa, data-cy, (Veja mais em: https://docs.cypress.io/guides/references/best-practices#Selecting-Elements) é uma melhoria para o sistema, em se tratando de testabilidade, uma vez que a possibilidade da ocorrência de quebras nos testes é menor, visto que risco de mudanças na lógica ou estilo do frontend não afetariam os testes.</p>

<p>Em se tratando de usabilidade, não há uma pradonização em algumas telas (tela de exclusão de produtos e clientes, por exemplo). Alguns elementos estão dispostos de forma diferente nas telas, o que, apesar de não afetar a funcionalidade do aplicação, torna a sua usabilidade comprometida. Uma possível melhoria seria padronizar as telas (mais especificamente a tela de exclusão de clientes e produtos)</p>

<p>Há uma quantidade de requisições realizadas no frontend o que lentifica o processo de fazer login no sistema.</p>

<p>Alguns campos no frontend que não há validação de obrigatoriedade, sendo possível salvar sem preenchimento de todos os dados (❌ Possível bug ❌)</p>



# Autor

[<img src="https://avatars.githubusercontent.com/u/17802288?v=4" width=115><br><sub>Lucas dos Santos Silva</sub>](https://github.com/eulucasilva)

