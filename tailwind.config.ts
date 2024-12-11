import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        // phone in landscape
        landscapephone: { raw: "(max-height: 650px)" },
      },
      keyframes: {
        enterAnim: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
            filter: "blur(5px)",
          },
          "100%": { opacity: "1", transform: "none", filter: "blur(0px)" },
        },
        enterImg: {
          "0%": { opacity: "0", filter: "blur(5px)" },
          "100%": { opacity: "0.6", filter: "blur(0px)" },
        },
        enterImgMobile: {
          "0%": { opacity: "0", filter: "blur(5px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
      },
      animation: {
        "enter-anim": "enterAnim 0.8s both",
        "enter-img": "enterImg 0.8s both",
        "enter-img-mobile": "enterImgMobile 0.8s both",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
