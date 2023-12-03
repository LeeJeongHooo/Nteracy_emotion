const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

export default merge(common, {
  mode: "production",
});
