module.exports = {
  purge: [],
  theme: {
    container: {
      center: true
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      "primary": "#fff",
      "primary-600": "#718096",
      "primary-700": "#4a5568",
      "primary-800": "#2d3748",
      "primary-900": "#1a202c",
      "primary-200": "#edf2f7",
      "theme-500": "#48bb78",
      "theme-600": "#38a169",
      "theme-700": "#2f855a"
    })
  },
  variants: {},
  plugins: []
};
