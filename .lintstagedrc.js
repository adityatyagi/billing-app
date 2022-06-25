/**
 * Checking your code takes time, even more so when the project gets bigger. Sometimes you change only markdown files or CI yaml files, and you don't need your TypeScript code to be checked.

Enters Lint staged, which goal is to only run your lint scripts when necessary, and only on the necessary files.
 */
const path = require('path');
// Refer: https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js
// lint-staged.config.js
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [
    `next lint --fix --file ${filenames
      .map(f => path.relative(process.cwd(), f))
      .join(' --file ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': filenames => `pnpm prettier --write ${filenames.join(' ')}`
};
