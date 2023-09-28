import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    dropShadow: {
      "cardShadow": "0px 6px 9px 0px rgba(0, 0, 0, 0.16)"
    },
    fontFamily: {
      "mainFont": ['Roboto Condensed', `sans-serif`],
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        // lg: "1023px",
        xl: "1440px",
      },
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
      },
    },
    extend: {},
  },
  plugins: [formsPlugin, typographyPlugin],
};
