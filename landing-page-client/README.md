Instalando e configurando styled components (inicial)

1 -  Instalar
yarn add styled-components

2 - Crie um arquivo styles.js na pasta de todo componente que for estilizar

3 - No arquivo style.js
Import styled from 'styled-components'

export const nomeDoComponenteDeEstilo = styled.tag`

<configurações do css>

`

tag pode ser qualquer tag.. div, section, menu, p etc.

4 -  Para utilizar este componente de estilo seguiremos o seguinte padrão

No arquivo jsx vamos importar tudo que está no styles.js
Import * as Styled from './styles.js

E envolver nossas tags com esse componente.

Ex:
Import * as Styled fomm './styles.js'
return(
  <Styled.Wrapper>
    <h1> Hello World </h1>
  </Styled.Wrapper>
)

Por ser um componente react podemos passar props

 <Styled.Wrapper background='blue'>

E no arquivo styles.js receberemos essas props da seguinte forma:
  4.1 Importa o {css} do styled-components
  4.2 Abre chaves para passa js e cria uma função anônima que recebe props e retorna css

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${(props) => css`
    background: ${props.background};
    color: ${props.color}
  `}
`;

Dessa forma podemos controlar o estilo pelo js.

5 -  Criando estilo global com styled components.

5.1 Na pasta styles da raiz do projeto, crie o global-styles.js e importe o {createGlobalStyle} do styled components.

5.2 Aplica o estilo no index.js da aplicação.
Obs: Neste caso, não envolva o index. Apenas chame o componente no arquivo e retorne.

ex de como retornar
<React.StrictMode>
  <GlobalStyles />
  <Home/>
<React.StrictMode/>
