module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      MysteryQuest: ["Mystery Quest"],
      Montserrat: ["Montserrat"],
    },

    extend: {
      colors: {
        primary: "#E3E1DC",
        secendary: "#291507",
        zaity: "#DEC68B",
      },
      inset: {
        "1/10": "10%",
      },
      spacing: {
        120: "30rem",
      },
      zIndex: {
        "-1": -1,
        "-10": -10,
        "-20": -20,
        "-30": -30,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
