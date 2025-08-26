// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",   // deep blue
        secondary: "#facc15", // gold/yellow
      },
    },
  },
  plugins: [],
};
