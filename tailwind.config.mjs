/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// CSS variables for theme switching
				'bg-primary': 'var(--bg-primary)',
				'bg-secondary': 'var(--bg-secondary)',
				'text-primary': 'var(--text-primary)',
				'text-secondary': 'var(--text-secondary)',
				'border-color': 'var(--border-color)',
				'accent': 'var(--accent)',
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			}
		},
	},
	plugins: [],
}
