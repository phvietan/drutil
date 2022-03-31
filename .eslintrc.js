module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
    'eslint-plugin-jsdoc',
  ],
  'rules': {
    'max-len': 0,
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2],
    'space-before-function-paren': 0,
    'eol-last': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    'jsdoc/require-jsdoc': ['error', {
      'contexts': [
        'MethodDefinition',
        'ClassDeclaration',
        'FunctionExpression',
        'FunctionDeclaration',
        'TSInterfaceDeclaration',
        'TSTypeAliasDeclaration',
        'TSEnumDeclaration',
      ],
    }],
  },
};
