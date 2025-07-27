import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pistachio: {
          DEFAULT: '#b8bf55',
          light: '#e3e89c',
          dark: '#7a7f2a',
        },
        accent: '#b8bf55',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config; 