/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#325A83',
        secondary: '#1E3954',
        gray: '#F5F5F5',
        white: '#FFFFFF',
    }
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    screens: {
      "xs": "300px",
      "xs400": "400px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "teste": "1150px",
      "xl": "1280px",
      "2xl": "1536px",
  }

    
  },
};
