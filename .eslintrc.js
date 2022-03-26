module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'max-len': 0,
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2],
    'space-before-function-paren': 0,
    'eol-last': 0,
  },
};
