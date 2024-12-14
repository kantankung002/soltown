import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#FFFFFF',
          700: '#743F39',
          800: '#3F2832',
          900: '#181425'
        },
        clay: {
          700: '#3A4466'
        }
      },
      fontFamily: {
        display: ['Super Pixel', 'monospace'],
        body: ['Pixel Craft', 'monospace']
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config 