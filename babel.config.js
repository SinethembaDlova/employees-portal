const alias = require('./importAliases');

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias,
        extensions: ['.jsx', 'js'],
      },
    ],
  ],
};
