module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // Use `prependData` for Sass versions 8 and above
        // Use `additionalData` for older Sass versions
        additionalData: `
        @import "@/styles/abstracts/_colors.scss";
        @import "@/styles/abstracts/_mixins.scss";
        ` // Adjust path to your variables file
      }
    }
  }
};