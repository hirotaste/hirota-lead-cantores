module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional music industry color palette - Trust & Credibility
        primary: '#1E40AF', // Deep blue - trust, professionalism
        secondary: '#7C3AED', // Rich purple - creativity, artistic
        accent: '#F8FAFC', // Clean white
        dark: '#0F172A', // Rich dark slate
        light: '#FFFFFF',
        success: '#059669', // Emerald green for success states
        warning: '#D97706', // Amber for attention
        // Modern gradient combinations
        'gradient-start': '#1E40AF',
        'gradient-end': '#7C3AED',
        // Additional professional tones
        'blue-deep': '#1E3A8A',
        'purple-rich': '#6D28D9',
        'slate-cool': '#64748B',
        'gray-warm': '#6B7280',
      },
      fontFamily: {
        'display': ['Oswald', 'system-ui', 'sans-serif'], // Bold display font for brand impact
        'body': ['Open Sans', 'system-ui', 'sans-serif'], // Clean, readable body text
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