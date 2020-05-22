module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: require('./package.json').dependencies.react,
    },
  },
  extends: ['plugin:react/recommended', "plugin:@typescript-eslint/recommended", ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'no-var': 'error',
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': ['error'],
    'no-multiple-empty-lines': ['error',
      { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }
    ],
    "no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "vars": "local",
      "args": "after-used",
      "caughtErrors": "all"
    }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
};
