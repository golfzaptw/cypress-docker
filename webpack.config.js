var path = require('path')

module.exports = {
  resolve: {
    alias: {
      constants: path.resolve(__dirname, 'cypress/support/constants'),
      utils: path.resolve(__dirname, 'cypress/support/utils'),
      keywords: path.resolve(__dirname, 'cypress/support/keywords'),
    },
  },
}
