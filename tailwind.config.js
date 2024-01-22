/** @type {import('tailwindcss').Config} */
// import bg from "./src/assets/authPicture.png";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 12px 17px 2px rgba(0, 0, 0, 0.14)",
      },
    },
    backgroundImage: {
      auth: "url('./src/assets/authPicture.png')",
    },
    colors: {
      Primary_30: "#005600",
      Primary_90: "#CBEBBF",
      Primary_10: "#082100",
      background: "#EDEFE8",
      Primary_70: "#65BF51",
      white: "#ffffff",
    },
  },
  plugins: [],
};
