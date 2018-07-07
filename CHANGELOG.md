# ChangeLog

## v1.1.0 (July 7, 2018)

### Features

- Replace deprecated package babel-plugin-inline-import-graphql-ast with babel-plugin-import-graphql. See [the CHANGELOG.md file for that package](https://github.com/detrohutt/babel-plugin-import-graphql/blob/master/CHANGELOG.md) for information about new features released since the package name changed (v2.5.0+).

## v1.0.3 (January 26, 2018)

### Maintenance

- Add "Known Issues" section to README.md

## v1.0.2 (January 25, 2018)

### Fixes

- Make emergency upgrade of `babel-plugin-inline-import-graphql-ast` due to a broken release I published while adding the `nodePath` option needed by this package.

## v1.0.1 (January 25, 2018)

### Fixes

- Respect `NODE_PATH` environment variable (from `process.env` or `.env` file)

### Maintenance

- Upgrade `babel-plugin-inline-import-graphql-ast` dependency to `^2.1.0`

## v1.0.0 (December 15, 2017)

- Initial release
