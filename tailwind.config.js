/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        graphite: '#050505',
        ember: '#ff6a00',
        copper: '#ff9d45',
      },
      boxShadow: {
        glow: '0 0 50px rgba(255, 106, 0, 0.3)',
        panel: '0 24px 90px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'radial-ember': 'radial-gradient(circle at center, rgba(255, 106, 0, 0.26), transparent 56%)',
      },
    },
  },
  plugins: [],
};
