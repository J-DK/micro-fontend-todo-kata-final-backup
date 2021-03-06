const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    'dist/create-todo/runtime-es2015.js',
    'dist/create-todo/polyfills-es2015.js',
    'dist/create-todo/main-es2015.js'
  ];

  await fs.ensureDir('dist/elements');
  await concat(files, 'dist/elements/create-todo.js');
})();
