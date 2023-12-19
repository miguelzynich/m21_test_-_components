module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-syntax-decorators', { decoratorsBeforeExport: true }],
    '@babel/plugin-proposal-class-properties',
  ],
};
