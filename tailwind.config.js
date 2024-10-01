/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2200px',
      'iPadPro': {'raw': '(width: 1024px) and (height: 1366px)'},
      'iMacSm' : { 'raw': '(max-width: 640px) and (min-height: 1260px)'},
      'iMacMd' : { 'raw': '(max-width: 768px) and (min-height: 1260px)'},
      'iMacLg' : { 'raw': '(max-width: 1024px) and (min-height: 1260px)'},
      'iMacXl' : { 'raw': '(max-width: 1280px) and (min-height: 1260px)'},
      'iMac2xl' : { 'raw': '(max-width: 1536px) and (min-height: 1260px)'},
      'iMac3xl' : { 'raw': '(max-width: 2239px) and (min-height: 1260px)'},
      'iMac': { 'raw': '(min-width: 2240px) and (min-height: 1260px)'},
      'iMacBig': { 'raw': '(min-height: 1800px)'}

    },
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '2.9rem',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      gridTemplateColumns: {
        'custom': '8fr 1fr 1fr 1fr',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'], 
        orbitron: ['Orbitron', 'sans-serif']
      },
      lineHeight: {
        'custom-paragraph': '2.5', // Define your custom line height
      },
    },
  },
  plugins: [],
};
