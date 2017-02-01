module.exports = {
  "env"          : {
    "browser" : true,
    "node"    : true,
    "commonjs": true,
    "es6"     : true
  },
  "extends"      : "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx"                         : true
    },
    "sourceType"  : "module"
  },
  "plugins"      : [
    "react"
  ],
  "rules"        : {
    "indent"         : [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes"         : [
      "error",
      "single"
    ],
    "semi"           : [
      "error",
      "always"
    ],
    "no-undef"       : [
      "warn"
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
};