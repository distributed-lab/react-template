const {fixupConfigRules} = require("@eslint/compat");

const simpleImportSort = require("eslint-plugin-simple-import-sort");
const prettier = require("eslint-plugin-prettier");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

const {
  FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = [
  {
    ignores: [
      "build/*.js",
      "dist/*.js",
      "config/*.js",
      "**/playground",
      "**/*.schema.js",
      "**/index.html",
      "**/*.md",
      "static/env.js",
    ],
  },

  ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:i18next/recommended",
    "prettier",
  )),

  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        defineProps: "readonly",
        defineEmits: "readonly",
        defineExpose: "readonly",
        withDefaults: "readonly",
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        tsconfigRootDir: ".",

        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },

      "import/resolver": {
        typescript: {},

        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },

      react: {
        version: "detect",
      },
    },

    rules: {
      "prettier/prettier": ["error", {}, {
        usePrettierrc: true,
      }],

      "arrow-parens": 0,
      "no-debugger": 1,

      "no-warning-comments": [1, {
        terms: ["hardcoded"],
        location: "anywhere",
      }],

      "no-return-await": 0,
      "object-curly-spacing": ["error", "always"],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-var": "error",
      "comma-dangle": [1, "always-multiline"],
      "linebreak-style": ["error", "unix"],
      "@typescript-eslint/no-non-null-assertion": "off",

      'react/jsx-curly-brace-presence': ['warn', 'never'],

      "max-len": [1, {
        code: 80,
        comments: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],

      "no-console": [1, {
        allow: ["warn", "error"],
      }],

      "react/display-name": "off",
    },
  },

  ...fixupConfigRules(
    compat.extends("plugin:@typescript-eslint/recommended", "plugin:import/typescript"),
  ).map(config => ({
    ...config,
    files: ["**/*.ts?(x)"],
  })),

  {
    files: ["**/*.ts?(x)"],

    languageOptions: {
      parser: tsParser,
    },
  }
];
