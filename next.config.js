const withNextra = require('nextra')({
  defaultShowCopyCode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})
 
module.exports = withNextra()