module.exports = {
  staticFileGlobs: [
    'build/css/**.css',
    'build/static/js/**.js',
    'build/favicon.ico',
    'build/index.html',
    'build/logo**.png'
  ],
  swFilePath: './build/service-worker.js',
  stripPrefix: 'build/',
  handleFetch: false,
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }]
}