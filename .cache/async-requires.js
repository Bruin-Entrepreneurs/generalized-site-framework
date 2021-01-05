// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-example-index-js": () => import("./../../../src/pages/example_index.js" /* webpackChunkName: "component---src-pages-example-index-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

