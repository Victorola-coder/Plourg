import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // if you are using variable and want to use more than one fonts for your webapp,you could define it here. like i did
        geistSans: ["var(--font-geist-sans)"],
        franklin: ["var(--font-franklin)"],
      },
      fontSize: {
        hero: ["175.2px", { lineHeight: "100%", letterSpacing: "-3%" }],
        h2: ["32px", { lineHeight: "90%", letterSpacing: "-3%" }],
      },
      keyframes: {
        "fade-effect": {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },

        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        loader: {
          "0%": {
            opacity: "0.2",
          },
          "100%": {
            opacity: "1",
          },
        },
        spin: {},
      },
      animation: {
        "fade-in": "fade-effect 300ms linear",
        "slide-down": "slide-down 300ms linear forwards",
        "slide-up": "slide-up 300ms linear forwards",
        "rotate-clockwise": "rotate-clockwise 1s infinite linear",
        "loader-opacity": "loader 1s ease-in-out alternate infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        primary: {
          DEFAULT: "#8066FF",
          100: "#6248E1",
          200: "#8066FF",
        },
        dark: {
          DEFAULT: "#141517",
          100: "#414141",
          200: "#121212",
          300: "#676B71",
        },
        main: {
          DEFAULT: "#E1DEF0",
          100: "#F3EFFD",
        },
        // Brand additions
        brand: {
          pink: "#FB41DC",
          green: "#00BA59",
        },
        surface: {
          DEFAULT: "#F8F8F8",
          white: "#FFFFFF",
        },
        border: {
          DEFAULT: "#E5E5E5",
        },
        ink: {
          DEFAULT: "#000000",
          muted: "#A3A3A3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
