/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      height: {
        header: '560px',  // Custom height for the header element
        rate: '450px'    // Custom height for the rate section
      },

      fontSize: {
        h1: '2.6rem',    // Custom font size for h1 elements
      },

      screens: {
        x3: '475px',      // Custom screen size breakpoint (not a standard Tailwind breakpoint)
      },

      colors: {
        'main': '#080A1A',    // Main color (a dark color, likely for background or primary elements)
        'subMain': '#F20000', // Submain color (likely for highlights, buttons, etc.)
        'dry': '#0B0F29',     // Dry color (could be used for background or accents)
        'text': '#C0C0C0',    // Text color (light gray for text)
        'border': '#4b5563',  // Border color (gray for borders)
        'dryGray': '#E0D5D5', // Dry gray (lighter gray tone, could be used for secondary elements)
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
