Criando uma aplicação strapi com banco de dados postgres

1 - Criando uma aplicação strapi
.comando: npx create-strapi-app <nomedoprojeto>
.comando yarn: yarn create strapi-app <nomedoprojeto> 
.Use o nome de usuário, senha, base de dados e host fornecido pelo ElephantPostgres

.DETALHE1: Se usar um host local agora, no deploy terá que alterar. 

2 - Corrigindo falha de segurança do ElephantPostgres
. Salva os dados do banco de dados em variáveis de ambiente para não expor seu banco ao subir os dados pro github

3 - Possível erro de many requestions
Caso esse erro apareça, adicione um pool ao objeto de conexão.
https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/databases.html#configuration-structure

pool: {
  min:0
  max:5
}
. Caso permaneça, diminua o intervalo

DETALHE2: Todos os dados são salvos na base de dados. O strapi apenas altera estes dados. 