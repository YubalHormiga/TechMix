/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          ' linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'
      }
    }
  },
  plugins: []
}
