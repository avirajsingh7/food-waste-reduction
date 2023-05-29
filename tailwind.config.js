/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eee258",
        secondary: "#f8f7f7",
        textColor: "#080708",
        background: "#fbf4f7",
        accent: "#979196",
        hoverColor: "#d6cc57",
        green: "#A0C537",
        dashboardOption: "#9BA2AF",
        editButton: "#3FA0F1",
        deleteButton: "#EF5E4C",
      },
    },
  },
  plugins: [],
};

