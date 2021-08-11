const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        cl: "50%",
      },
      transitionProperty: {
        width: "width",
        "max-height": "max-height",
      },
      maxHeight: {
        max: "9999px",
      },
    },
  },
  variants: {
    extend: {
      width: ["focused-sibling"],
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("focused-sibling", ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `:focus + .focused-sibling\\:${rule.selector.slice(
            1
          )}`;
        });
      });
    }),
  ],
};
