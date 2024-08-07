/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      "white-90": "#E4E4E7",
      "white-95": "#F1F1F3",
      "white-97": "#F7F7F8",
      "white-99": "#FCFCFD",
      "absolute-white": "#FFFFFF",
      "absolute-black": "#000000",
      "purple-60": "#703BF7",
      "purple-65": "#8254F8",
      "purple-70": "#946CF9",
      "purple-75": "#A685FA",
      "purple-90": "#DBCEFD",
      "purple-95": "#EDE7FE",
      "purple-97": "#F4F0FE",
      "purple-99": "#FBFAFF",
      "grey-08": "#141414",
      "grey-10": "#1A1A1A",
      "grey-15": "#262626",
      "grey-20": "#333333",
      "grey-30": "#4D4D4D",
      "grey-40": "#666666",
      "grey-50": "#808080",
      "grey-60": "#999999"
    }},
  },
  plugins: [],
}

