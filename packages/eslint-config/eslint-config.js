// .eslintrc.js
module.exports = {
  // ...
  env: {
    browser: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",    
    "react-app",
    "prettier",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["jest"]
};
