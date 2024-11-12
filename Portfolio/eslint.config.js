// eslint.config.js

import globals from "globals";
import jsPlugin from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],

  // Define the parser for TypeScript files
  parser: tsParser,

  // Configure parser options for ECMAScript and TypeScript
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },

  // Define shared environment settings, like browser globals
  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  // Extend from recommended configurations for each plugin
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],

  // Define global variables
  globals: {
    ...globals.browser,
  },

  // Define plugins used
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
  ],

  // Configure additional rules or override specific rule settings
  rules: {
    // Example: enforce Prettier formatting
    "prettier/prettier": "error",
    
    // TypeScript specific rules (optional adjustments)
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // React specific rules (optional adjustments)
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off", // not needed with React 17+
  },

  // Define settings for React
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
