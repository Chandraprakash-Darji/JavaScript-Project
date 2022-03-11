module.exports = {
  content: ["*/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // primary text
        FmVeryDarkDesaturatedBlue: "hsl(238, 29%, 16%)",
        FmSoftRed: "hsl(14, 88%, 65%)",
        //Neutral text
        FmTxVeryGrayishBlue: "hsl(237, 12%, 33%)",
        FmTxGrayishBlue: "hsl(240, 6%, 50%)",
        //Divider
        FMDivideGray: "hsl(240, 5%, 91%)",
        //Gradient
        FmGrSoftViolet: "hsl(273, 75%, 66%)",
        FmGrSoftBlue: "hsl(240, 73%, 65%)",
      },
      fontFamily: {
        FMKumbhSans: "'Kumbh Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
