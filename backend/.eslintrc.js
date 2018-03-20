module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
  ],
  parser: 'babel-eslint',
  plugins: [
    'node',
    'import'
  ],
  rules: {
    'node/no-unsupported-features': 0
  }
};