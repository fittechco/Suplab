import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mainFont: ['Roboto Condensed', `sans-serif`],
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        // lg: "1023px",
        xl: "1440px",
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '2rem',
        '2xl': '3rem',
      },
    },
    extend: {},
  },
  plugins: [formsPlugin, typographyPlugin],
};
