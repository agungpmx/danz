module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        // Add prettier formatting rules here
      },
    ],
    // Add ESLint linting rules here
    "no-console": "off",
    "no-unused-vars": "warn",
  },
};
