module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(90deg, #FF5733, #FFBD33, #DBFF33, #75FF33, #33FF57, #33FFBD, #33DBFF, #3375FF, #335BFF, #5733FF, #BD33FF, #FF33DB, #FF3375)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'rocket-launch': 'rocket-launch 1s forwards',
      },
      keyframes: {
        'rocket-launch': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
      },
    },
  },
  plugins: [],
}