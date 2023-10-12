/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {  
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'textColor': '#555555',
        'dateColor': '#B9B9B9',
        'timeColor': '#B9B9B9',
        'linkHoerColor': '#40189E',
        'linkBgHover': '#2596be',
        'bgColorFooter': '#202938',
        'footerTextColor': '#ffffff',
        'bermuda': '#78dcca',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
