/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        ourBlue: "#052639",
        lightOurBlue: "#0d5f8f",
      },
      backgroundImage: {
        parallax: 'url("./images/chair2.JPg")',//change this later
        paralPhone: 'url("./images/phone.jpg")',
      },
      borderRadius: {
        'xl':'85px',
        '1xl':'10px'
      },
      screens:{
        'md':'900px'
      }
    },
  },
  plugins: [],
};
