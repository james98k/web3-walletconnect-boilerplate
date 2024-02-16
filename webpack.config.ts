const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle filename
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Path to your HTML template
    }),
    new Dotenv()
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // Resolve these extensions
    alias: {
      // Setup an alias for easier imports (adjust according to your file structure)
      data: path.resolve(__dirname, 'src/data/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader' // Use ts-loader for TypeScript files
      },
      {
        test: /\.css$/, // Add this rule for CSS files
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Add this rule for image files
        type: 'asset/resource',
      },
      // Add more rules as needed for other file types
    ]
  }
};
