/** @type {import('tailwindcss').Config} */
import  withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'netflix-red': {
            100: 'rgb(229, 9, 20)',
            200: 'rgb(193, 17, 25)',
      
          }
      },
    },
  },
  plugins: [],
})