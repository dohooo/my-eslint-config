module.exports = {
  extends: [
    'plugin:react/recommended',
    '@dohooo/eslint-config-ts',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-wrap-multilines': ['error', {
      return: 'parens-new-line',
      assignment: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
  },
}
