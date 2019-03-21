# ChangeLog

## v2.0.1 (March 21, 2019)

### Maintenance

- Update minimum version of babel-plugin-import-graphql to v2.7.0
- Update CHANGELOG to add missing entry for v2.0.0
- Update README to remove old known issue that only affects create-react-app@1.x

## v2.0.0 (March 21, 2019)

### Breaking

- Version 2.x of this package is for use with version 2.x of react-app-rewired (Thanks @stushurik)

## v1.1.1 (July 9, 2018)

### Fixes

- Fix plugin name in babel config (Thanks @Slessi)

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
