var path = require('path');

require('babel-register')({
  presets: ['babel-preset-es2015'].map(require.resolve),
});
