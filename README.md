# @dohooo/eslint-config

[![npm](https://img.shields.io/npm/v/@dohooo/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@dohooo/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint @dohooo/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@dohooo"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Tips

- [Auto fix](https://eslint.org/docs/latest/rules/max-len) can't work with eslint. (issue)(https://github.com/eslint/eslint/issues/11325)

## Check Also

- [dohooo/eslint-config](https://github.com/dohooo/eslint-config) - My ESLint config
- [dohooo/ts-starter](https://github.com/dohooo/ts-starter) - My starter template for TypeScript library

## License

MIT
