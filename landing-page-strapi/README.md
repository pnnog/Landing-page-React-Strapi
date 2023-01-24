Liberando acesso à API pública com a role public

1 - No strapi

.settings > Role > Public > 

2 - Acesse o content type Page e assinale o que deseja liberar. 
Find: Ler todas (GET)
FinOne: Ler individual (GET/id)
Update: Atualizar(POST)
Create: Criar (POST)
Delete: Deletar (DELETE)

A direita é mostrada a rota

3 - Infelizmente o strapi não popula quando fazemos a requisição pela URL. para que ele faça isso, devemos passar api/pages/id/?populate=*

Ainda assim, ele só popula um nível. Se quisermos que ele popule completamente o componente menu, por exemplo, usamos api/pages/id/?populate[menu][populate]=*

Se quisermos que popule as sections e o menu...
api/pages/id/?populate[menu][populate]=*&populate[sections][populate]=*

4 - ATUALIZAÇÃO

 instalando o plugin "strapi-plugin-populate-deep", basta fazer a chamada dessa forma e tudo já será populado:
    http://localhost:1337/api/pages?populate=deep

instalação: yarn add strapi-plugin-populate-deep

Populate (nativo) e Paginação

Para algo nativo do Strapi, podemos fazer via código ou via URL. Veja como fazer "populate" via URL.

Por exemplo, para popular nossas "sections", use:

    http://localhost:1337/api/pages?populate[sections][populate]=*

Para paginação, use pagination[page] e pagination[pageSize]:

    http://localhost:1337/api/pages?populate[sections][populate]=*&pagination[page]=1&pagination[pageSize]=10

A URL acima está na página 1, o número de elementos por página é 10.

Para ordenação, use sort[índice]=campo:asc ou desc. Veja:

    http://localhost:1337/api/pages?populate[sections][populate]=*&pagination[page]=1&pagination[pageSize]=1&sort[0]=id:desc

A URL acima usa o índice 0 (primeiro campo usado para ordenação), o campo é o ID, o formato é decrescente (sort[0]=id:desc).
Minha URL final para obter os dados

Como vou usar o plugin indicado anteriormente, minha URL vai ficar bem simples para popular os dados. Eu só preciso alterar a paginação. Veja:

    http://localhost:1337/api/pages?populate=deep&pagination[pageSize]=1&sort[0]=id:desc

Caso queira seguir como estou fazendo, a URL acima é a mesma que estou usando daqui em diante.
Leia mais na documentação

Mais dados sobre isso em: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html

Outras atualizações virão ao longo das aulas. Agradeço a compreensão.

