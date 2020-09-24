module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        courier: ['"Courier Prime"', "monospace"],
      },
    },
  },
  variants: {},
  plugins: [
    (module.exports = {
      // ...
      plugins: [require("@tailwindcss/custom-forms")],
    }),
  ],
};
