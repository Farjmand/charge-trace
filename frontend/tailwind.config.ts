import type { Config } from 'tailwindcss';
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      'pink': '#9F3B8B',
      'purple': '#A162F7'
    },
    extend: {},
  },
  plugins: [],
};

export default config;
