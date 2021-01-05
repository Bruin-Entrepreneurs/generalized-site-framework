const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-example-index-js": hot(preferDefault(require("/Users/collin/Desktop/code/be/generalized-site-framework/src/pages/example_index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/collin/Desktop/code/be/generalized-site-framework/src/pages/index.js")))
}

