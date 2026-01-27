/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#00ff41',
        'terminal-cyan': '#00f3ff',
        'terminal-bg': '#0a0a0a',
        'terminal-header': '#1a1a1a',
      },
      fontFamily: {
        'mono': ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'neon-green': '0 0 5px #00ff41, 0 0 20px #00ff4122',
        'neon-cyan': '0 0 5px #00f3ff, 0 0 20px #00f3ff22',
      },
      animation: {
        'scanline': 'scanline 10s linear infinite',
        'flicker': 'flicker 0.15s infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%': { opacity: '0.97' },
          '5%': { opacity: '0.95' },
          '10%': { opacity: '0.9' },
          '15%': { opacity: '0.95' },
          '20%': { opacity: '0.98' },
          '25%': { opacity: '0.95' },
          '30%': { opacity: '0.9' },
          '35%': { opacity: '0.95' },
          '40%': { opacity: '0.98' },
          '45%': { opacity: '0.95' },
          '50%': { opacity: '0.9' },
          '55%': { opacity: '0.95' },
          '60%': { opacity: '0.98' },
          '65%': { opacity: '0.95' },
          '70%': { opacity: '0.9' },
          '75%': { opacity: '0.95' },
          '80%': { opacity: '0.98' },
          '85%': { opacity: '0.95' },
          '90%': { opacity: '0.9' },
          '95%': { opacity: '0.95' },
          '100%': { opacity: '0.98' },
        }
      }
    },
  },
  plugins: [],
}
