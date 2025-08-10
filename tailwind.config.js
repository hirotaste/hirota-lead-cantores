module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Singer website color palette - Bright and energetic
        primary: '#F39C12', // Golden yellow
        secondary: '#E67E22', // Vibrant orange
        accent: '#ECF0F1', // Soft white
        dark: '#2C3E50', // Dark blue-gray
        light: '#FFFFFF',
        // Gradient combinations
        'gradient-start': '#F39C12',
        'gradient-end': '#E67E22',
      },
      fontFamily: {
        'display': ['Oswald', 'system-ui', 'sans-serif'], // Bold display font for artist name
        'body': ['Open Sans', 'system-ui', 'sans-serif'], // Readable body text
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-soft': 'bounce 2s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}