const { injectBabelPlugin } = require('react-app-rewired');

function rewireInlineImportGraphqlAst(
  config,
  env,
  graphqlPluginOptions = {}
) {
  return injectBabelPlugin(
    ['inline-import-graphql-ast', graphqlPluginOptions],
    config
  );
}

module.exports = rewireInlineImportGraphqlAst;
