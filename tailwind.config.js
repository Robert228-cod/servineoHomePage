module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2B6AE0',
        'secondary': '#1AA7ED',
        'light-blue': '#759AE0',
        'dark-blue': '#2B31E0',
      },
    },
  },
  plugins: [],
};
