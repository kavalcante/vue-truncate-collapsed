const vue = require('rollup-plugin-vue');

module.exports = {
  banner: true,
  format: ['cjs', 'es', 'umd', 'umd-min'],
  css: true,
  plugins: [
    vue({ css: true }),
  ],
};
