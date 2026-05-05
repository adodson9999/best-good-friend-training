import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A1A',
        cream: '#F5F1EA',
        bone: '#FFFFFF',
        forest: '#2A3A2E',
        brass: '#B8956A',
        stone: '#8B8680',
        rust: '#A04E2C',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-hero': ['clamp(26px,3.2vw,48px)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-section': ['clamp(28px,4vw,56px)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        scrollDown: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(0.6) translateY(-4px)' },
          '50%': { opacity: '1', transform: 'scaleY(1) translateY(4px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'scroll-down': 'scrollDown 1.8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}

export default config
