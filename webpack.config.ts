import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';

const config: webpack.Configuration[] = [
  {
    entry: './src/main/index.ts',
    name: 'electron',
    target: 'electron-main',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.ts', '.json']
    },
    output: {
      path: __dirname + '/build',
      filename: 'app.js'
    }
  },
  {
    entry: './src/renderer/index.tsx',
    name: 'react',
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.json']
    },
    output: {
      path: __dirname + '/build',
      publicPath: './',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: __dirname + '/build/',
      compress: true,
      port: 3000
    },
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        template: 'src/renderer/index.html'
      })
    ]
  }
];

export default config;
