[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3AYURHRU7PMCL)

# react-app-rewire-inline-import-graphql-ast

Add [`babel-plugin-import-graphql`](https://github.com/detrohutt/babel-plugin-import-graphql) to your create-react-app app via [`react-app-rewired`](https://github.com/timarney/react-app-rewired)

## Versions

For react-app-rewired@2.x use v2.x of this package.
For react-app-rewired@1.x use v1.x of this package.

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
