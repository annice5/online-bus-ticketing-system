/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#050316",
        background: "#fbfbfe",
        primary: "#043b5d",
        secondary: "#4d6c6f", // Updated for better visibility
        accent: "#438e87",
        complementary: "#d97d54", // Complementary color for booked seats
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right top, #043b5d, #2c5c77, #517e91, #79a1ac, #a4c4c8, #abcbcd, #b2d3d1, #badad6, #9dc7c2, #80b3ae, #62a19a, #438e87)",
      },
    },
  },
  plugins: [],
};
