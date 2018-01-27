[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3AYURHRU7PMCL)

# react-app-rewire-inline-import-graphql-ast

Add [`babel-plugin-inline-import-graphql-ast`](https://github.com/detrohutt/babel-plugin-inline-import-graphql-ast) to your create-react-app app via [`react-app-rewired`](https://github.com/timarney/react-app-rewired)

## Known Issues

#### `Cannot read property 'type' of undefined` in file containing .gql/.graphql import

I'm putting this right at the top because if you use this package to any real degree you'll almost certainly experience this error at some point and it can be hard to track down if you don't know what it is. This is caused by a bug in Babel 6 (Which create-react-app 1.x uses).

A PR has been submitted to Babel [here](https://github.com/babel/babel/pull/7205) and hopefully they'll merge it and make a patch release soon.

In the meantime, there's an easy, although annoying, workaround. Just change the content of the file throwing the error in any way. The easiest and most reliable change I've found is to simply add an empty comment `//` on it's own line when this error occurs. As the file gets updated over time, you can later remove the empty comment. I usually only have 1 or 2 of these in my project at any given time.

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
