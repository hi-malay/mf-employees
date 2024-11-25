const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mf-demo",
    projectName: "employees",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    devServer: {
      host: "0.0.0.0", // Bind to all network interfaces
      port: 9002,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
};
