module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  rules: {
    "implicit-arrow-linebreak": 0,
    "class-methods-use-this": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "react/jsx-filename-extension": 0,
    "no-underscore-dangle": 0,
    "no-return-assign": 0,
    "no-unused-expressions": 0,
  },
};
