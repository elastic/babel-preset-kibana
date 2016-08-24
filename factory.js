function compact(arr) {
  return arr.filter(Boolean)
}

module.exports = function (opts) {
  opts = opts || {}

  return {
    presets: compact([
      opts.react && require('babel-preset-react')
    ]),

    plugins: compact([
      // stage 3
      require('babel-plugin-syntax-trailing-function-commas'),
      require('babel-plugin-transform-async-to-generator'),
      require('babel-plugin-transform-exponentiation-operator'),

      // stage 2
      require('babel-plugin-transform-class-properties'),
      require('babel-plugin-transform-object-rest-spread'),

      // stage 1
      require('babel-plugin-transform-class-constructor-call'),
      require('babel-plugin-transform-export-extensions'),

      // es2015
      require('babel-plugin-check-es2015-constants'),
      require('babel-plugin-transform-es2015-arrow-functions'),
      require('babel-plugin-transform-es2015-block-scoped-functions'),
      require('babel-plugin-transform-es2015-block-scoping'),
      require('babel-plugin-transform-es2015-classes'),
      require('babel-plugin-transform-es2015-computed-properties'),
      require('babel-plugin-transform-es2015-destructuring'),
      require('babel-plugin-transform-es2015-duplicate-keys'),
      require('babel-plugin-transform-es2015-for-of'),
      require('babel-plugin-transform-es2015-function-name'),
      require('babel-plugin-transform-es2015-literals'),
      require('babel-plugin-transform-es2015-modules-commonjs'),
      require('babel-plugin-transform-es2015-object-super'),
      require('babel-plugin-transform-es2015-parameters'),
      require('babel-plugin-transform-es2015-shorthand-properties'),
      require('babel-plugin-transform-es2015-spread'),
      require('babel-plugin-transform-es2015-sticky-regex'),
      require('babel-plugin-transform-es2015-template-literals'),
      require('babel-plugin-transform-es2015-typeof-symbol'),
      require('babel-plugin-transform-es2015-unicode-regex'),
      opts.regenerator && require('babel-plugin-transform-regenerator')
    ]),
  }
};
