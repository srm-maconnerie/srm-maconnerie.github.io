module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');

  eleventyConfig.addWatchTarget('./src/assets');

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/",

    dir: {
      input: 'src',
      output: 'public',
    },
  };
}
