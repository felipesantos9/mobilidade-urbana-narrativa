import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['dist/'] },
  js.configs.recommended,
  { languageOptions: { globals: globals.browser } },
  { files: ['*.config.js'], languageOptions: { globals: globals.node } },
  prettier,
];
