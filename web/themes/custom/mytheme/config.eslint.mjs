// Install these packages first if you haven't already:
// npm install --save-dev globals @eslint/js

import globals from "globals";
import js from "@eslint/js";

export default [
  {
    // Applies this configuration to standard JS files by default (**/*.js, **/*.mjs)
    // If you need it to apply to specific files only, use the 'files: ["..."]' key.

    // Extends "eslint:recommended"
    ...js.configs.recommended,

    languageOptions: {
      // Replaces the legacy "env" key (browser: true, es2021: true)
      globals: {
        ...globals.browser,
        ...globals.es2021, // Note: es2021 globals are usually included by default with modern ecmaVersion
      },
      // Keeps your existing parser options
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      // Your custom rules go here (currently empty based on your original config)
    },
  },
];
