/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    screens: {
      xs: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',
        br: '#FFF6E0',
        accent: '#EEF7F9',
      },
      
    },
  },
  plugins: [],
};
