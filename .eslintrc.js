module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    'airbnb-base'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "import/extensions": 0,
    "global-require": 0,
    "no-param-reassign": 0,
    "import/no-unresolved": 0,
    "no-underscore-dangle": 0,
    "no-array-constructor": 0,
    "no-new-object": 0,
    "func-names": 1,
    "linebreak-style": 0,
    "import/no-extraneous-dependencies": 0
  },
  env: {
    amd: true
  },
  globals: {},
}
