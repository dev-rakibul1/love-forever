// eslint-disable-next-line no-undef
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  rules: {
    // Add or override rules as needed
  },
}
