# @elastic/babel-preset-kibana

The babel settings that Kibana uses.

## install

This modules is installed using npm:

```sh
npm install --save-dev @elastic/babel-preset-kibana
```

## usage

Rather than export a single preset this module contains two:

### `@elastic/babel-preset-kibana/node`

These presets are used in the Kibana server and for all code running on node.js. Today the only real difference is the removal of the react presets.

### `@elastic/babel-preset-kibana/webpac`

These are the presets we use for building front-end code in Kibana. They include the plugins necessary to use React as features back to stage1.

### .babelrc

To use either of these presets add them to your `.babelrc` file in the `"presets"` list

```json
{
  "presets": [
    "@elastic/babel-preset-kibana/node"
  ]
}
```
