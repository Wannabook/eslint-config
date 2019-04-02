# Wannabook eslint config

## About

This package includes basic ESLint config and prettier inside of it. Rules apply to ES6 and React.

## Installation

Install eslint together with our custom package as an npm dependency:

```
npm i eslint wannabook-eslint-config --save-dev
```

Then add the following devDependencies to package.json:

```angular2html
    "babel-eslint": "10.0.1",
    "eslint-config-airbnb": "17.1.0",
    "eslint-config-prettier": "4.1.0",
    "eslint-plugin-babel": "5.3.0",
    "eslint-plugin-import": "2.14.0",
    "eslint-plugin-jsx-a11y": "6.1.1",
    "eslint-plugin-prettier": "3.0.1",
    "eslint-plugin-react": "7.11.0",
    "prettier": "1.16.4"
```

In your project, create a `.eslintrc` file and write:

```
{
  "extends": "eslint-config-wannabook"
}
```

Make sure ESLint is turned on in your IDE. 

You can add your custom rules below, like this:

```
{
  "extends": "eslint-config-wannabook",
  "rules": {
      "camelcase": "warn",
      "comma-dangle": [2, "only-multiline"],
  }
}
``` 

## Prettier auto-fix on commit

Install respective packages:

```angular2html
npm i husky lint-staged --save-dev
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
