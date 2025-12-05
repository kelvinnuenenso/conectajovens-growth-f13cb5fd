import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#000000',
          yellow: '#FFD600',
          gray: {
            dark: '#1A1A1A',
            graphite: '#2C2C2C',
            cloud: '#E6E6E6',
            mist: '#F5F5F5',
          },
          accent: {
            softYellow: '#FFF4B3',
            gold: '#CFAF32',
            blue: '#0A2540',
            green: '#00C27A',
            purple: '#3F2E8C',
          }
        }
      }
    }
  },
  plugins: [],
} satisfies Config;