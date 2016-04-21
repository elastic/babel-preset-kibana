module.exports = function (opts) {
  opts = opts || {};

  var presets = [];
  if (opts.react) {
    presets.push(require('babel-preset-react'));
  }

  var plugins = [].concat(
    require('babel-preset-es2015').plugins,
    require('babel-preset-stage-1').plugins,
    require('babel-preset-stage-2').plugins,
    require('babel-preset-stage-3').plugins
  );

  return {
    presets: presets,
    plugins: plugins,
  }
};
