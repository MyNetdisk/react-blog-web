/** @format */

const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')

/* if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
} */

module.exports = withLess(withCss({}))
