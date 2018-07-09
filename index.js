const { injectBabelPlugin } = require('react-app-rewired')

function rewireInlineImportGraphqlAst(config, env, gqlPluginOptions = {}) {
  const pluginOptions = Object.assign({}, gqlPluginOptions, { nodePath: process.env.NODE_PATH })
  return injectBabelPlugin(['import-graphql', pluginOptions], config)
}

module.exports = rewireInlineImportGraphqlAst
