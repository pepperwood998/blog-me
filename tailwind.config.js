module.exports = {
  purge: [],
  theme: {
    container: {
      center: true
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      "primary": "#fff",
      "primary-200": "#edf2f7",
      "primary-600": "#718096",
      "primary-700": "#4a5568",
      "primary-800": "#2d3748",
      "primary-900": "#1a202c",
      "theme-500": "#48bb78",
      "theme-600": "#38a169",
      "theme-700": "#2f855a"
    }),
    textColor: theme => ({
      ...theme("colors"),
      "primary": "#000",
      "primary-200": "#2d3748",
      "primary-300": "#4a5568",
      "primary-500": "#a0aec0",
      "primary-900": "#f7fafc",
      "theme-500": "#48bb78"
    }),
    borderColor: theme => ({
      ...theme("colors"),
      "theme-500": "#48bb78",
      "primary-400": "#718096",
      "primary-700": "#e2e8f0"
    })
  },
  variants: {},
  plugins: []
};
