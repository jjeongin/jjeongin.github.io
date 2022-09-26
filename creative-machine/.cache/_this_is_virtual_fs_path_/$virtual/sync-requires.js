
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/jlee/src/creative-machine-website/src/pages/404.js")),
  "component---src-templates-about-page-js": preferDefault(require("/Users/jlee/src/creative-machine-website/src/templates/about-page.js")),
  "component---src-templates-download-page-js": preferDefault(require("/Users/jlee/src/creative-machine-website/src/templates/download-page.js")),
  "component---src-templates-home-page-js": preferDefault(require("/Users/jlee/src/creative-machine-website/src/templates/home-page.js")),
  "component---src-templates-reference-page-js": preferDefault(require("/Users/jlee/src/creative-machine-website/src/templates/reference-page.js"))
}

