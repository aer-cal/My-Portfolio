/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070b',
        panel: '#0d1320',
        panelSoft: '#11192a',
        textmain: '#e5eefc',
        textmuted: '#8ca0bf',
        neon: '#3fa9ff',
        neonSoft: '#7bc8ff',
        line: 'rgba(63, 169, 255, 0.18)',
      },
      boxShadow: {
        neon: '0 0 24px rgba(63, 169, 255, 0.28)',
      },
      fontFamily: {
        sans: ['Bahnschrift', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
