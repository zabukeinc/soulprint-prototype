/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F2EA',
        'bg-soft': '#FBF7F0',
        'soft-cream': '#FFF9EF',
        sage: '#DDEDDC',
        mint: '#DFF2EC',
        lavender: '#E8DDFB',
        'lavender-strong': '#9D7BEA',
        peach: '#F8DCCB',
        rose: '#F4C7D2',
        'sun-yellow': '#F7D875',
        aqua: '#9FD9D0',
        teal: '#16A7A0',
        ink: '#1F2130',
        'muted-text': '#7A7C8C',
        'soft-muted': '#A7A1A0',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        'xl': '34px',
        'lg': '28px',
        'md': '22px',
        'sm': '16px',
      },
      boxShadow: {
        'warm': '0 22px 60px rgba(99, 82, 60, 0.14)',
        'warm-lg': '0 22px 60px rgba(99, 82, 60, 0.14)',
        'warm-soft': '0 12px 30px rgba(99, 82, 60, 0.09)',
        'warm-sm': '0 8px 18px rgba(99, 82, 60, 0.05)',
      },
    },
  },
  plugins: [],
}