module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['eslint:recommended', '@vue/prettier', '@vue/typescript/recommended', 'plugin:markdown/recommended', 'plugin:vue/vue3-essential'],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ['simple-import-sort', 'import'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    eqeqeq: 'off',
    curly: 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unsafe-optional-chaining': 'warn',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
};
