# Wannabook eslint config

## About

This package includes basic ESLint config and prettier inside of it. Rules apply to ES6 and React.

## Installation

Install the package as an npm dependency:

```
npm i wannabook-eslint-config
```

In your project, create a `.eslintrc` file and write:

```
{
  extends: "wannabook-eslint-config"
}
```

You can add your custom rules below, like this:

```
{
  extends: "wannabook-eslint-config",
  rules: {
      "camelcase": "warn",
      "comma-dangle": [2, "only-multiline"],
  }
}
``` 

## Prettier auto-fix on commit

Install respective packages:

```angular2html
npm husky lint-staged --save-dev
```

and add the following lines to your package.json:

```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "*.{js,json,css,md}": [
      "prettier --write",
      "git add"
    ]
}
```
