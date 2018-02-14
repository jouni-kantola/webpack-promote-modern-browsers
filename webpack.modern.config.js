const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TemplatedAssetsWebpackPlugin = require("templated-assets-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    modern: path.join(__dirname, "Assets/app.ts")
  },
  output: {
    path: path.join(__dirname, "wwwroot/assets"),
    filename: "[name].[chunkhash].js",
    publicPath: "/assets/"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "ts-loader.tsconfig.json")
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: {
            loader: "css-loader"
          }
        })
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: "[name].[contentHash].css",
      allChunks: true
    }),
    new TemplatedAssetsWebpackPlugin({
      rules: [
        {
          test: /.js$/,
          template: {
            path: path.join(__dirname, "ViewTemplates/modern-script-view-template.tmpl"),
          },
          output: {
            path: path.join(__dirname, "Pages/_GeneratedViews")
          }
        }
      ]
    })
  ],
  devtool: "sourcemap"
};
