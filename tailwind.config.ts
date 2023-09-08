import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "rich-black-100": "#01080E",
          "rich-black-200": "#011627",
          "rich-black-300": "#011221",
        },
        secondary: {
          "slate-gray": "#607B96",
          "persian-green": "#3C9D93",
          "savoy-blue": "#4D5BCE",
        },
        accent: {
          "sandy-brown": "#FEA55F",
          turquoise: "#43D9AD",
          "coral-pink": "#E99287",
          "lavender-floral": "#C98BDF",
        },
        lines: {
          gunmetal: "#1E2D3D",
        },
        gradients: {
          "savoy-blue": "#4D5BCE",
          turquoise: "#43D9AD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
