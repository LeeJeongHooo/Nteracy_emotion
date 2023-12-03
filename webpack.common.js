const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getHtmlPlugins = (chunks) => {
  return chunks.map(
    (chunk) =>
      new HtmlWebpackPlugin({
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
};

module.exports = {
  entry: { popup: path.resolve("./src/popup/Popup.tsx") },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve("src/static"), to: path.resolve("dist") },
      ],
    }),
    ...getHtmlPlugins(["popup"]),
  ],
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  output: {
    filename: "popup.js",
  },
};
