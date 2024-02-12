const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle filename
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'] // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader' // Use ts-loader for TypeScript files
      }
    ]
  }
};


