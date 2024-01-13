/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      colors: {
        primary: {
          100: '#8754eb',
          200: '#7242d8',
          300: '#5e30c5',
          400: '#491eb2',
          500: '#340c9f'
        },
        secundary: {
          500: '#455EE6',
          400: '#4163c8',
          300: '#5f79da',
          200: '#7c90ed',
          100: '#99a6ff'
        },
        emphasys: {
          100: '#ff897b',
          200: '#eb6f66',
          300: '#d65651',
          400: '#c23c3b',
          500: '#ad2226'
        },
        background: {
          day: '#fff',
          night: '#333'
        }
      }
    }
  },
  plugins: []
}
