/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Lilita One"],
        clock: ["Chakra Petch"],
      },
    },
  },
  plugins: [],
};
