/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      colors: {
        // ### Neutral
        mediumGray: 'hsl(0, 0%, 41%)',
        almostWhite: 'hsl(0, 0%, 98%)',
        almostBlack: 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
};
