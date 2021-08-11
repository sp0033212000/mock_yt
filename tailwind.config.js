const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
      maxWidth: {
        "1/4": "calc(100%/4)",
      },
      gridTemplateColumns: {
        "fit-card": "repeat(auto-fit, minmax(280px, 1fr))",
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
    require("@tailwindcss/line-clamp"),
  ],
};
