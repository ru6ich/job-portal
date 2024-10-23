/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'mine-shaft': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#2d2d2d',
    },
        'bright-sun': {
        '50': '#fffbeb',
        '100': '#fef2c7',
        '200': '#fee589',
        '300': '#fdd149',
        '400': '#fcbe23',
        '500': '#f69c0a',
        '600': '#da7505',
        '700': '#b55108',
        '800': '#933f0d',
        '900': '#79340e',
        '950': '#451903',
    },
    
      }
    },
  },
  plugins: [],
}
