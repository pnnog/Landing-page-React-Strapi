import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

test('should have background blue', () => {
  const { debug } = renderTheme(<Home />);
  //Testando se o componente pai do heading que contém 'Hello World' está na tela
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello World',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.backgroundColor.home,
  });
  debug();
});
