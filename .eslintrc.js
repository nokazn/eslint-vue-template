module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'vue/html-closing-bracket-newline': [2, {
      singleline: 'never',
      multiline: 'never',
    }],
    'import/extensions': [2, {
      js: 'never',
      ts: 'never',
      json: 'never',
      vue: 'never',
      scss: 'never',
    }],
    'import/no-unresolved': 0,
    'import/no-cycle': 1,
    'require-await': 2,
    'no-console': process.env.NODE_ENV === 'production'
      ? [1, { allow: ['warn', 'error'] }]
      : 0,
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 2
      : 0,
    // 空白行は2行まで
    'no-multiple-empty-lines': [2, {
      max: 2,
    }],
    // 'indent': [2, 2, {
    //   'SwitchCase': 1
    // }],
    // 'space-before-function-paren': [1, 'always'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
