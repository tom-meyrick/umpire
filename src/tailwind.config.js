module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hind", "Helvetica", "Arial", "sans-serif"],
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
