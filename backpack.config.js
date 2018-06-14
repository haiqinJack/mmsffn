module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './build/main.js'
    return config
  }
}
