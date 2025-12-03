tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#0c0a09',
                    surface: '#1c1917',
                    apricot: '#F97316',
                    glow: '#fb923c',
                    text: '#fafaf9',
                    muted: '#a8a29e',
                }
            },
            fontFamily: {
                sans: ['Manrope', 'system-ui', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
};