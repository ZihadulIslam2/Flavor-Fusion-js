/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E7A500',
      },
      backgroundImage: {
        'hero-bg': "url('/assets/pexels-lumn-604969.jpg')", // Use public path
      },
    },
  },
  plugins: [daisyui],
}
