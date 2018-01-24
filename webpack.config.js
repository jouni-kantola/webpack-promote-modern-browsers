const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const RazorPartialViewsWebpackPlugin = require("razor-partial-views-webpack-plugin");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: path.join(__dirname, "Assets/app.ts")
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
            loader: "babel-loader"
          },
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
          fallback: "style-loader",
          use: {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        })
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin([path.join(__dirname, "wwwroot/assets")]),
    new ExtractTextPlugin({
      filename: "[name].[contentHash].css",
      allChunks: true
    }),
    new RazorPartialViewsWebpackPlugin({
      rules: [
        {
          test: /.js$/,
          output: {
            path: path.join(__dirname, "Pages/_GeneratedViews")
          }
        },
        {
          test: /\.css$/,
          output: {
            name: defaultName => defaultName.split(".")[0] + "-styles",
            path: path.join(__dirname, "Pages/_GeneratedViews")
          }
        }
      ]
    })
  ],
  devtool: "sourcemap"
};
