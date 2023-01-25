Testando componentes

1 - Home
.No primeiro momento, o jest está renderizando a home desconsiderando que ela está incluída no contexto do ThemeProvider. Desta forma não é possível testar as props (estilos) que theme provider passa Home.

1.1 - Para solucionar isso, criamos uma função que renderiza Home dentro do theme provider.

styles > render-theme.js

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};


1.2 - Importe a função de renderização no arquivo de teste, e renderize novamente.

1.3 Testando se o componente pai do heading que contém 'Hello World' está na tela

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);

  const headingContainer = screen.getByRole('heading', {
    name: 'Hello World',
  }).parentElement;
});

1.4 Testando o estilo desse headingContainer

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);

  const headingContainer = screen.getByRole('heading', {
    name: 'Hello World',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.backgroundColor.home,
  });
});


2 -  Plugin de testes para styled components

yarn add -D jest-styled-components

2.1 - Import
Para não precisar importar em cada teste, importe o plugin no SetupTests.js



