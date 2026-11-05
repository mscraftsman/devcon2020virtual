module.exports = {
  css: {
    loaderOptions: {
      css: {
        url: {
          filter: url => !url.startsWith("/")
        }
      },
      scss: {
        sassOptions: {
          silenceDeprecations: ["legacy-js-api", "import"]
        }
      }
    }
  }
};
