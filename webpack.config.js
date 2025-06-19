const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                removeComments: false, // Preserve comments
                declaration: false, // Don't generate .d.ts files
                outDir: undefined, // Don't output to separate files
              }
            }
          },
          {
            loader: path.resolve(__dirname, 'ts-aggregator-loader.js'),
          }
        ],
        exclude: /node_modules|index.ts/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'aggregated.ts',
    path: path.resolve(__dirname, 'dist'),
    
  },
  mode: 'development',
  // Ignore errors and continue building
  bail: false,
  // Suppress error output
  stats: {
    errorDetails: false,
    errors: false,
    warnings: false
  }
}; 