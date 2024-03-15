const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(EleventyVitePlugin);

  eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
    /** @type {import('tailwindcss').Config} */
    const tailwindConfig = {
      content: ['./src/**/*.{js,jsx,njk,md,ts,tsx}'],
      plugins: [require('./dist/tailwind/osom-tailwind.umd.js')],
    };

    postcss([tailwindcss(tailwindConfig), autoprefixer()])
      .process(cssCode, {from: undefined})
      .then(
        (r) => done(null, r.css),
        (e) => done(e, null),
      );
  });

  eleventyConfig.addWatchTarget('styles/**/*.css');

  return {
    dir: {
      input: 'src',
      output: 'pages',
    },
  };
};
