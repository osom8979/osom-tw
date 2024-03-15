const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const tailwindConfig = require('./tailwind.config');

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(EleventyVitePlugin);

  eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
    postcss([tailwindcss(tailwindConfig), autoprefixer()])
      .process(cssCode, {from: undefined})
      .then(
        result => done(null, result.css),
        reason => done(reason, null),
      );
  });

  eleventyConfig.addWatchTarget('styles/**/*.css');

  return {
    dir: {
      input: 'src',
      output: 'pages',
    },
    pathPrefix: "/osom-ui/",
    templateFormats: ["md"]
  };
};
