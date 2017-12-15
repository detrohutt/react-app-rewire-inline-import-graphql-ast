# react-app-rewire-inline-import-graphql-ast
Add [`babel-plugin-inline-import-graphql-ast`](https://github.com/detrohutt/babel-plugin-inline-import-graphql-ast) to your create-react-app app via [`react-app-rewired`](https://github.com/timarney/react-app-rewired)

## Installation

```sh
npm install --save react-app-rewire-inline-import-graphql-ast
# alternatively if you have yarn installed
yarn add react-app-rewire-inline-import-graphql-ast
```

## Usage

In the `config-overrides.js` you created for `react-app-rewired` add this code:

```JS
/* config-overrides.js */

const rewireInlineImportGraphqlAst = require('react-app-rewire-inline-import-graphql-ast');

module.exports = function override(config, env) {
  config = rewireInlineImportGraphqlAst(config, env);
  return config;
}
```

## Credits

This repo borrows heavily from [`react-app-rewire-styled-components`](https://github.com/withspectrum/react-app-rewire-styled-components) by @withspectrum
