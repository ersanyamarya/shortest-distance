module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/standard',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
