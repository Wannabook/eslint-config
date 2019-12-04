module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  plugins: ["prettier", "react-hooks", "import"],
  rules: {
    "comma-dangle": [2, "only-multiline"],
    "jsx-quotes": "warn",
    "max-classes-per-file": ["warn", 1],
    "max-len": ["warn", { "code": 90 }, { "ignoreTrailingComments": true }, { "ignoreComments": true }],
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
    "quotes": ["warn", "single"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/order": ["warn", {
      "groups": ["builtin", "external", "internal", ["parent", "sibling"], "index"],
      "newlines-between": "always-and-inside-groups"
    }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off"
  }
};
