module.exports = {
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-unresolved': 1,
    'import/extensions': 1,
    'jsx-a11y/anchor-is-valid': [
      'error', {
        'components': ['Link'],
        'specialLink': ['to']
      }
    ],
  },
  extends: 'airbnb'
};