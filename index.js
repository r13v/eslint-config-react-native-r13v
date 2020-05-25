const path = require("path");

module.exports = {
  env: {
    es6: true,
    "react-native/react-native": true,
  },

  globals: {
    globalThis: true,
    __DEV__: true,
  },

  plugins: ["import", "promise", "unicorn", "formatjs"],

  extends: [
    "@react-native-community",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
  ],

  settings: {
    "import/resolver": {
      typescript: {},
    },
  },

  rules: {
    // general
    "max-lines": ["error", 500],
    "no-console": "error",
    "object-shorthand": "error",
    "no-unneeded-ternary": "error",
    "no-nested-ternary": "error",
    "newline-before-return": "warn",
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ["error", "never"],

    // prettier
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        semi: false,
        arrowParens: "always",
        singleQuote: false,
        printWidth: 120,
        bracketSpacing: true,
      },
    ],

    // async suffix
    "no-restricted-syntax": [
      "error",
      {
        selector: "FunctionDeclaration[async=false][id.name=/Async$/]",
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector: "FunctionDeclaration[async=true][id.name!=/Async$/]",
        message: "Async function name must end in 'Async'",
      },
      {
        selector: "MethodDefinition[value.async=false][key.name=/Async$/]",
        message: "Method ending in 'Async' must be declared async",
      },
      {
        selector: "MethodDefinition[value.async=true][key.name!=/Async$/]",
        message: "Async method name must end in 'Async'",
      },
      {
        selector:
          "Property[value.type=/FunctionExpression$/][value.async=false][key.name=/Async$/]",
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector:
          "Property[value.type=/FunctionExpression$/][value.async=true][key.name!=/Async$/]",
        message: "Async function name must end in 'Async'",
      },
      {
        selector:
          "VariableDeclarator[init.type=/FunctionExpression$/][init.async=false][id.name=/Async$/]",
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector:
          "VariableDeclarator[init.type=/FunctionExpression$/][init.async=true][id.name!=/Async$/]",
        message: "Async function name must end in 'Async'",
      },
    ],

    // unicorn
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          props: false,
          params: false,
          ref: false,
          args: false,
        },
      },
    ],
    "unicorn/consistent-function-scoping": "off",

    // import
    "import/order": [
      "error",
      {
        "newlines-between": "always",
      },
    ],
    "import/newline-after-import": "error",
    "import/no-cycle": "error",
    "import/no-unused-modules": "error",
    "import/no-default-export": "error",

    // react
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".tsx"] }],
    "react/sort-comp": "warn",
    "react/jsx-no-literals": "warn",

    // react-native
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-color-literals": "error",
    "react-native/no-raw-text": "error",
    "react-native/no-single-element-style-arrays": "error",

    // promise
    "promise/prefer-await-to-then": "error",
    "promise/prefer-await-to-callbacks": "error",

    // format js
    "formatjs/enforce-default-message": ["error", "literal"],
    "formatjs/no-multiple-whitespaces": "error",
    "formatjs/no-multiple-plurals": "error",
  },
};
