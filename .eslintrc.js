/** @format */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-typescript', 'prettier/@typescript-eslint', 'prettier/react', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    'linebreak-style': ['off', 'windows'],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
  },
}
