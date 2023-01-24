Configurando o projeto com React, Eslint, Prettier e Editorconfig

1 - Crie o projeto (já dentro da pasta)
 yarn create react-app .

2 - Instale os plugins restantes (eslint + prettier)
 yarn add -D prettier eslint eslint-config-prettier eslint-plugin-prettier

3- Configure Prettier e Eslint com as seguintes configurações

----ESLINTRC--------
autoconfig: yarn eslint --init

.eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};

-----PRETTIER------

.prettierrc.js

module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'ignore',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: 'off',
};

-----BABEL------

.babelrc

{
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["@babel/plugin-proposal-optional-chaining"]
}


4 - Crie um arquivo .editorconfig no VsCode com o botão direito do mouse com  a seguinte configuração:

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

5 - Organizando pastas

Criar
src > components
src > components > templates > App
src > styles (p/ estilos globais)

Apagar
WebVitals
Arquivos CSS pois usaremos styled components
logo.svg

Mover
Mova todos arquivos de App para a pasta App e renomeie de acordo(index.. etc)


