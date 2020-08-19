const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./public/**/*.html', './src/**/*.ts', './src/**/*.tsx'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],

  // Indicate which selectors are safe to leave
  safelist: ['html', 'body']
});

module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer'), ...[purgecss]],
};
