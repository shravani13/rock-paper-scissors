/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(229, 25%, 31%)',
        blue: 'hsl(229, 64%, 46%)',
        darkGray:  'hsl(217, 16%, 45%)',
        orange: 'hsl(39, 89%, 49%)',
        lightOrange: 'hsl(40, 84%, 53%)',
        ink: 'hsl(230, 89%, 62%) ',
        lightInk: 'hsl(230, 89%, 65%)',
        red: 'hsl(349, 71%, 52%)',
        lightRed: 'hsl(349, 70%, 56%)',
        purple: 'hsl(261, 73%, 60%) ',
        lightPurple: 'hsl(261, 72%, 63%)',
        skyBlue:'hsl(189, 59%, 53%)',
        skyLightBlue: 'hsl(189, 58%, 57%)'
      },
      fontFamily:{
        BarlowSemiCondensed:['Barlow Semi Condensed']
      }
    },
  },
  plugins: [],
}

