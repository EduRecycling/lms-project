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
      auth: "url('./public/images/auth/authPicture.png')",
    },
    colors: {
      Primary_30: "#005600",
      Primary_90: "#CBEBBF",
      Primary_10: "#082100",
      background: "#EDEFE8",
      Primary_70: "#65BF51",
      white: "#ffffff",
      primary: "#56cf40",
      "primary-10": "#65BF51",
      "primary-20": "#013B01",
      "primary-30": "#015700",
      "primary-40": "#007100",
      "primary-50": "#008c00",
      "primary-60": "#2ea621",
      "primary-70": "#65bf51",
      "primary-80": "#98d685",
      "primary-90": "#cbebbf",
      "primary-100": "#ffffff",
      secondary: "#444545",
      "secondary-10": "#1B1A1A",
      "secondary-20": "#303030",
      "secondary-30": "#464746",
      "secondary-40": "#5f5f5e",
      "secondary-50": "#767677",
      "secondary-60": "#909190",
      "secondary-70": "#aaabaa",
      "secondary-80": "#c6c6c6",
      "secondary-90": "#e2e3e3",
      "secondary-100": "#ffffff",
      "neutral-colour-96": "#F3F4F0",
      "Neutral-colour": "#171E00",
    },
  },
  plugins: [],
};
