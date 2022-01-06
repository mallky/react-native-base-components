module.exports = {
  root: true,
  extends: ['airbnb', 'prettier'],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'prettier/prettier': ['error'],
    'no-unused-expressions': 0,
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
  },
};
