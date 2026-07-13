/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070b',
        panel: '#101010',
        panelSoft: '#171717',
        textmain: '#f3f3f3',
        textmuted: '#a3a3a3',
        neon: '#d9d9d9',
        neonSoft: '#f2f2f2',
        line: 'rgba(255, 255, 255, 0.12)',
      },
      boxShadow: {
        neon: '0 0 24px rgba(255, 255, 255, 0.18)',
      },
      fontFamily: {
        sans: ['Bahnschrift', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
