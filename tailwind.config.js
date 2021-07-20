module.exports = {
  purge: ["**/*.js", "**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "80vw": "80vw",
        "90vw": "90vw",
        "99vw": "96vw",
        "90%": "90%"
      },
      height: {
        "90vh": "90vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "60vh": "60vh",
        "50vh": "50vh",
        "40vh": "40vh",
        "30vh": "30vh",
        "20vh": "20vh",
        "10vh": "10vh"
      },
      minHeight: {
        "l-hero": "600px"
      },
      fontFamily: {
        WorkSans: ["Work Sans", "sans-serif"],
        Rale: ["Raleway", "sans-serif"]
      },
      textColor: {
        "gl-green": "#02B64A"
      },
      backgroundColor: {
        "gl-green": "#02B64A"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
