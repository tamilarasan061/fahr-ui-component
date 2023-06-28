/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{tsx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    extend: {
      linearGradient: ["dark"],
    },
  },
  theme: {
    colors: {
      ...colors,
      "primary-color": {
        100: "hsl(var(--primary-100))",
        200: "hsl(var(--primary-200))",
        300: "hsl(var(--primary-300))",
        orange: "hsl(var(--primary-orange))",
        blue: "hsl(var(--primary-blue))",
        gold: "hsl(var(--primary-gold))",
        dark: "hsl(var(--primary-dark))",
        red: "hsl(var(--primary-red))",
        default: "hsl(var(--primary-default))",
      },
      "secondary-color": "hsl(var(--secondary))",
      "primary-blue": {
        900: "#123559",
        800: "#254F7B",
        700: "#3F6D9D",
        800: "#5F8EBF",
        700: "#86B3E1",
        600: "#B1D7FF",
        500: "#C3E0FF",
        400: "#D4E9FF",
        300: "#E6F2FF",
      },
      "primary-gold": "#b68a35",
    },
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto",
        "sidebar-collapsed": "64px auto",
      },
      gradientColorStops: {
        bgGradient: ["var(--first)", "var(--second)", "var(--third)"],
      },
      linearGradientColors: {
        bgGradient: ["112.1deg", "var(--gradient-color-stops)"],
      },
      backgroundImage: {
        "bg-pattern": "url('/assets/images/blurry-bg.webp')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        first: "hsl(var(--first))",
        second: "hsl(var(--second))",
        third: "hsl(var(--third))",
        "accent-blue": "var(--accent-blue)",
        "semantic-info": {
          500: "var(--semantic-info-500)",
          400: "var(--semantic-info-400)",
          300: "var(--semantic-info-300)",
          200: "var(--semantic-info-200)",
          100: "var(--semantic-info-100)",
        },
        "semantic-warning": {
          500: "var(--semantic-warning-500)",
          400: "var(--semantic-warning-400)",
          300: "var(--semantic-warning-300)",
          200: "var(--semantic-warning-200)",
          100: "var(--semantic-warning-100)",
        },
        "semantic-success": {
          500: "var(--semantic-success-500)",
          400: "var(--semantic-success-400)",
          300: "var(--semantic-success-300)",
          200: "var(--semantic-success-200)",
          100: "var(--semantic-success-100)",
        },
        "semantic-danger": {
          500: "var(--semantic-danger-500)",
          400: "var(--semantic-danger-400)",
          300: "var(--semantic-danger-300)",
          200: "var(--semantic-danger-200)",
          100: "var(--semantic-danger-100)",
        },
        neutral: {
          800: "var(--neutral-800)",
          700: "var(--neutral-700)",
          600: "var(--neutral-600)",
          500: "var(--neutral-500)",
          400: "var(--neutral-400)",
          300: "var(--neutral-300)",
          200: "var(--neutral-200)",
          100: "var(--neutral-100)",
        },
        overlay: "var(--overlay)",
        icon: "#7388B2",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        pageBackground:
          "linear-gradient(to left, var(--start), var(--middle), var(--end))",
        cardBg: "linear-gradient(12deg, var(--card-bg), transparent)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        button: {
          DEFAULT: "hsl(var(--primary))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary-300))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        progressBar: {
          DEFAULT: "hsl(var(--progress-bar-secondary))",
          foreground: "hsl(var(--progress-bar-primary))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "var(--font-poppins)", ...fontFamily.sans],
        cairo: "var(--font-cairo)",
        poppins: "var(--font-poppins)",
        gedinar: "var(--font-gedinar)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        dark: "0px 29px 52px -22px #e89a0038, 0px 13px 34px -40px #8200e7",
      },
    },
    plugins: [
      // require('tailwindcss-animate'), , rgba(0, 0, 0, 0.3) 0px 30px 60px -30px
      plugin(function ({ addVariant }) {
        addVariant("child", "&>*");
        addVariant("child-hover", "& > *:hover");
      }),
    ],
  },
};
