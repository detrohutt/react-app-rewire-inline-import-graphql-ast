const { addBabelPlugin } = require('customize-cra');

function rewireInlineImportGraphqlAst(config, env, gqlPluginOptions = {}) {
  const pluginOptions = Object.assign({}, gqlPluginOptions, { nodePath: process.env.NODE_PATH })
  return addBabelPlugin(['import-graphql', pluginOptions])(config)
}

module.exports = rewireInlineImportGraphqlAst