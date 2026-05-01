import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#045498',
          dark: '#053c63',
          light: '#1a6bb5'
        },
        accent: {
          DEFAULT: '#FDAF0F',
          dark: '#e09900'
        },
        bg: '#F8FAFD',
        text: '#1A1A2E',
        muted: '#6B7280',
        border: '#E5E9F0',
        card: '#FFFFFF',
        cardHover: '#F0F6FF'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #045498 0%, #053c63 100%)',
        'brand-gradient-r': 'linear-gradient(135deg, #053c63 0%, #045498 100%)',
        'hero-mesh': 'radial-gradient(circle at top left, rgba(4, 84, 152, 0.14), transparent 28%), radial-gradient(circle at 80% 20%, rgba(253, 175, 15, 0.16), transparent 22%), radial-gradient(circle at bottom right, rgba(4, 84, 152, 0.08), transparent 30%)'
      },
      boxShadow: {
        soft: '0 12px 40px rgba(4, 84, 152, 0.08)',
        lift: '0 18px 50px rgba(4, 84, 152, 0.14)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 12s ease-in-out infinite alternate'
      }
    }
  },
  plugins: []
}

export default config
