module.exports = {
  "env"          : {
    "browser": true,
    "es6"    : true
  },
  "extends"      : ["eslint:recommended"],
  "parserOptions": {
    "sourceType" : "module"
  },
  "rules": {
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-undef": [
      "warn"
    ],
    "no-unused-vars": [
      "warn"
    ],
  }
};