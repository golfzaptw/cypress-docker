const fs = require('fs-extra')
const path = require('path')
const webpack = require('@cypress/webpack-preprocessor')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  const options = {
    webpackOptions: require('../../webpack.config'),
    watchOptions: {},
  }
  on('file:preprocessor', webpack(options))
  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome') {
      args.push('--start-maximized')
      return args
    }
    if (browser.name === 'electron') {
      args.maximizable = true
      return args
    }
  })
  const file = config.env.configFile || 'develop'
  return getConfigurationByFile(file)
}
