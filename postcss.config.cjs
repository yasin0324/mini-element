module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-each": {
      plugins: {
        beforeEach: {
          "postcss-for": {},
          "postcss-color-mix": {},
        },
      },
    },
    "postcss-each-variables": {},
  },
};
