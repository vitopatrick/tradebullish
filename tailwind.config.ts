import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Montserrat Alternates", "sans-serif"],
        body: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        main: "#3179ff",
        sideBar: "#262831",
        bg: "#191b23",
      },
    },
  },
  plugins: [],
};
export default config
