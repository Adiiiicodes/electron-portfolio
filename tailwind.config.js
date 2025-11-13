module.exports = {
  content: [
    './src/**/*.{js,jsx,html}',
    './src/react/components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#111827',
        accent: '#10b981',
        background: '#1e293b',
        foreground: '#f1f5f9',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}