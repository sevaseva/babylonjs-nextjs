const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const path = require("path")
const TSCOFNIG_BASE_URL = path.resolve(require("./tsconfig.json").compilerOptions.baseUrl)

module.exports = function (config) {
  config.set({
    frameworks: ["mocha"],
    plugins: ["karma-chrome-launcher", "karma-mocha", "karma-chai", "karma-webpack"],
    files: ["src/**/*.spec.*", "src/**/*.test.*"],
    reporters: ["progress"],
    port: 9876, // karma web server port
    colors: true,
    //logLevel: config.LOG_INFO,
    browsers: ["ChromeHeadless"],
    //autoWatch: true,
    singleRun: true,
    concurrency: Infinity,
    webpack: {
      mode: "development",
      resolve: {
        modules: [TSCOFNIG_BASE_URL, "node_modules"]
      },
      module: {
        rules: [
          {
            test: /\.[tj]sx?$/,
            loader: "esbuild-loader",
            options: {
              loader: "tsx",
              target: "es2019"
            }
          }
        ]
      },
      plugins: [new NodePolyfillPlugin()]
    },
    preprocessors: {
      "src/**/*.spec.{js,jsx,tsx,ts,mjs,cjs}": ["webpack"],
      "src/**/*.test.{js,jsx,tsx,ts,mjs,cjs}": ["webpack"]
    }
  })
}


//"scan": "madge --circular repos --exclude node_modules/*",
