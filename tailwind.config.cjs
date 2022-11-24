const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				float: {
					"0%": {
						transform: "translate(0%, 0%) rotate(0deg) scale(1.00)"
					},
					"10%": {
						transform: "translate(12px, 10px) rotate(4deg) scale(1.01)"
					},
					"20%": {
						transform: "translate(24px, 20px) rotate(8deg) scale(1.01)"
					},
					"30%": {
						transform: "translate(35px, 30px) rotate(10deg) scale(1.00)"
					},
					"40%": {
						transform: "translate(45px, 40px) rotate(8deg) scale(1.00)"
					},
					"45%": {
						transform: "translate(50px, 45px) rotate(6deg) scale(1.00)"
					},
					"50%": {
						transform: "translate(45px, 50px) rotate(4deg) scale(0.99)"
					},
					"60%": {
						transform: "translate(35px, 45px) rotate(1deg) scale(1.00)"
					},
					"70%": {
						transform: "translate(24px, 40px) rotate(-1deg) scale(1.00)"
					},
					"80%": {
						transform: "translate(12px, 30px) rotate(-2deg) scale(1.00)"
					},
					"90%": {
						transform: "translate(10px, 20px) rotate(-1deg) scale(1.00)"
					},
					"90%": {
						transform: "translate(5px, 10px) rotate(-0.5deg) scale(1.00)"
					},
					"100%": {
						transform: "translate(0px, 0px) rotate(0deg) scale(1.00)"
					}
				},
				zoomin: {
					"0%": {
						opacity: "0",
						transform: "scale3d(0.3, 0.3, 0.3)",
					},
					"50%": {
						opacity: "1",
					}
				},
				bounceright: {
					"0%, 100%": {
					  transform: "translateX(-25%)",
					  "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
					},
					"50%": {
					  transform: "translateX(0)",
					  "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
					},
				},
			},
			animation: {
				float: 'float linear 10s infinite',
				zoomin: 'zoomin 750ms both',
				bounceright: 'bounceright 1s infinite',
			}
		},
		colors: {
			primary: {
				DEFAULT: "#FF9900",
				50: "#fff3e0",
				100: "#ffe0b2",
				200: "#ffcd80",
				300: "#ffb84d",
				400: "#ffa826",
				500: "#ff9900",
				600: "#fb8d00",
				700: "#f57d00",
				800: "#ef6d00",
				900: "#e65200",
			},
			onPrimary: {
				DEFAULT: "#000000",
				50: "#000000",
				100: "#000000",
				200: "#000000",
				300: "#000000",
				400: "#000000",
				500: "#000000",
				600: "#000000",
				700: "#000000",
				800: "#000000",
				900: "#000000",
			},
			secondary: {
				DEFAULT: "#DE49B5",
				50: "#fae2f2",
				100: "#f2b7de",
				200: "#e984c9",
				300: "#de49b4",
				400: "#d400a5",
				500: "#c60095",
				600: "#b80091",
				700: "#a6008c",
				800: "#960087",
				900: "#78007d",
			},
			onSecondary: {
				DEFAULT: "#000000",
				50: "#000000",
				100: "#000000",
				200: "#000000",
				300: "#000000",
				400: "#000000",
				500: "#000000",
				600: "#000000",
				700: "#FFFFFF",
				800: "#FFFFFF",
				900: "#FFFFFF",
			},
			white: colors.white,
			black: colors.black,
			darkblue: "#414764",
			dark: "#2e3450",
			pale: "#fafafa",
		},
		fontFamily: {
			worksans: ['Work Sans', 'sans-serif'],
			berlingske: ['Berlingske', 'serif']
		}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require("tailwindcss-animation-delay"),
	],
}
