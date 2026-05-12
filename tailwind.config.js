/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        accent: '#1e3a5f',
        mist: '#f5f7fb',
        line: '#dbe3ee',
      },
      boxShadow: {
        soft: '0 16px 40px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
