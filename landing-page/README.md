Entendendo as funcionalidades do strapi. 

1 - Collection Types: Lista de coisas. 
.Lista de usuário, de autores etc. Utilizado para criar lista de vários elementos. 

2 - Single Types: Tipo único. 
.Utilizado pra a criação de uma landing page e dentro dela estarão vários componentes. Uma landing page (single type) pode utilizar em seus componentes dados das collection types. Ex: Um post(componente da landing page) tem 10 autores. Esses autores vêm das collection types já com nome, idade e profissão. 

.Neste caso, como criaremos várias landing pages adminstradas pelo strapi, ela pertencerá as collection types. 


3 - Criando uma collection type
.Em display name, o nome irá no singular. O strapi criará uma versão plural. 
.Em advanced settings, o sistema de draft serve como segurança para salvar rascunhos. 
.Crie seus components

DETALHE 1: NÃO ESQUEÇA DOS TRATAMENTOS COM REQUIRED E UNIQUE. OBSERVE SE SÃO NECESSÁRIOS E PREENCHA.

4 - Criando type para URL da página. 
. O tipo usado é o de UID.
.fica atrelado ao title, por ex. Sempre que o title muda ele muda também. 
