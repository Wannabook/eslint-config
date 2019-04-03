module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    camelcase: "warn",
    "comma-dangle": [2, "only-multiline"],
    "jsx-quotes": "warn",
    "max-classes-per-file": ["warn", 1],
    "max-len": ["warn", { "code": 80 }],
    "max-lines": ["error", 300],
    "no-console": "warn",
    "no-const-assign": "error",
    "no-var": "warn",
    "no-unused-vars": ["warn", { "args": "none" }],
    "object-curly-spacing": ["warn", "always"],
    "padding-line-between-statements": [
      "warn",
      { "blankLine": "always", "prev": "*", "next": "return" }
    ],
    "prefer-spread": "warn",
    "prettier/prettier": ["warn", {
      "tabWidth": 2,
      "trailingComma": "es5",
      "semi": true,
      "singleQuote": true,
    }],
    "require-await": "error",
    "quotes": ["warn", "single"]
  }
};
