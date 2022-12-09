// .eslintrc.js
module.exports = {
  // ...
  env: {
	  jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",    
    "react-app",
    "prettier",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ]
};
