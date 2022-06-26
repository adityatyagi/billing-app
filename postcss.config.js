module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          'tailwindcss',
          'postcss-flexbugs-fixes',
          [
            // PostCSS Preset Env lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments.
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009'
              },
              stage: 3,
              features: {
                'custom-properties': false
              }
            }
          ],
          [
            '@fullhuman/postcss-purgecss',
            {
              content: [
                './pages/**/*.{js,jsx,ts,tsx}',
                './components/**/*.{js,jsx,ts,tsx}'
              ],
              defaultExtractor: content =>
                content.match(/[\w-/:]+(?<!:)/g) || []
            }
          ]
        ]
      : [
          // No transformations in development
          'tailwindcss'
        ]
};
