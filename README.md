# ProjetoFichaClinica
Projeto Full-Stack, desenvolvido em Angular e NodeJs

Parte do Frontend
* Entre na pasta frontend e digite no terminal "npm i"(necessário node instalado), caso seja necessário a instalação do Angular e Angular Material basta instalar pelo terminal.
* Depois de ter tudo feito, basta no terminal dentro da pasta do frontend ainda, digitar "npm start".

Parte do Backend
O backend utiliza Knex, Postgres.
* Antes de tudo entre na pasta do backend e digite "npm i" para instalar as dependências package.json.
* Entre no knexfile coloque o usuário e senha do seu postgres, e o nome de um database novo com nome "ficha" como exemplo do arquivo.
* As migrations já estão feitas e estão na pasta migrations, então basta digitar no terminal dentro da pasta do backend "knex migrate:latest".
* Depois de ter feito tudo, basta digitar no terminal dentro da pasta backend "npm start".
