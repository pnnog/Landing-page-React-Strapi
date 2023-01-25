Criando um tema para aplicação

1 - Importe o {ThemeProvider} styled-components no index da aplicação
2 - Envolva a aplicação toda
3 - Crie o arquivo theme.js em styles e crie os themas em formato de objeto. exporte
4- importe o tema
5 -  passe o tema como props
6 -  Receba o tema no componente de estilo através de props com uma função anônima.

ex:

Exportando theme

export const theme = {
  primary: 'red',

  backgroundColor: {
    main: 'purple',
  },
};

Utilizando tema

 body{
    ${({ theme }) => css`
    color:${theme.primary};
    background:${theme.backgroundColor.main};
    font-family:sans-serif;
    `}
  }
