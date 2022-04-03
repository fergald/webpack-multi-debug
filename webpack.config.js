const path = require('path');

module.exports = {
  entry: ['./js/lib1.js', './js/lib2.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    library: {
      name: 'MyLibrary',
      type: 'umd',
    },
    filename: 'lib.js',
    path: path.resolve(__dirname, 'dist'),
  },
  "optimization": {
    "minimize": false,
    usedExports: true,
  },
  mode: "development",
};
