// tailwind.config.js

export default {
  darkMode: ['class', '[data-theme="dark"]'], // Enables dark mode via the 'dark' class or a [data-theme="dark"] attribute
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}', // Adjust to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        toggleBg: 'var(--toggle-bg)',
        toggleFg: 'var(--toggle-fg)',
        outline: 'var(--outline)',
        secondaryText: 'var(--secondary-text)',
      },
	  fontFamily: {
  			sans: [
  				'Montserrat',
  				'sans-serif'
  			]
  		},
    },
  },
  plugins: [],
}