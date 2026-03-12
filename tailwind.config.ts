import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Librería de Colores Clave — Pina Yoga Studio ───────────────────────
      colors: {
        'nav-color': "#5ca78f",
        yoga: {
          // Teal — color principal del estudio
          teal: {
            50:  "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488", // ← Color principal (botones, títulos, íconos)
            700: "#0f766e", // ← Títulos h1/h2
            800: "#115e59",
            900: "#134e4a",
          },
          // Cyan — gradientes y acentos secundarios
          cyan: {
            50:  "#ecfeff",
            100: "#cffafe",
            300: "#67e8f9",
            500: "#06b6d4",
            600: "#0891b2", // ← Gradiente "via"
            700: "#0e7490",
          },
          // Green — difuminados y fondo de secciones
          green: {
            50:  "#f0fdf4",
            100: "#dcfce7",
            300: "#86efac",
            600: "#16a34a",
          },
          // Emerald — Power Yoga badge y acentos de energía
          emerald: {
            50:  "#ecfdf5",
            100: "#d1fae5",
            300: "#6ee7b7",
            600: "#059669",
          },
        },

        // Paleta de superficie y texto
        surface: {
          white:     "#ffffff",
          offwhite:  "#f9fafb",    // Fondos secundarios
          card:      "rgba(255,255,255,0.80)", // backdrop-blur cards
          border:    "rgba(13,148,136,0.15)",  // border-teal-100
        },

        // Paleta de texto
        text: {
          primary:   "#0f766e", // teal-700 — encabezados
          secondary: "#4b5563", // gray-600 — párrafos
          muted:     "#9ca3af", // gray-400
          onDark:    "#ccfbf1", // teal-100 — texto sobre fondos oscuros
          white:     "#ffffff",
        },

        // Paleta semántica / estado de clases
        classType: {
          power:      "#6ee7b7", // emerald-300
          hatha:      "#67e8f9", // cyan-300
          yin:        "#5eead4", // teal-300
          beginners:  "#86efac", // green-300
          meditation: "#93c5fd", // blue-300
          sound:      "#7dd3fc", // sky-300
        },

        // Paleta de dificultad de asanas
        difficulty: {
          beginnerBg:     "#dcfce7", // green-100
          beginnerText:   "#166534", // green-800
          intermediateBg: "#cffafe", // cyan-100
          intermediateText:"#155e75",// cyan-800
          advancedBg:     "#ccfbf1", // teal-100
          advancedText:   "#115e59", // teal-900
        },
      },
      // ────────────────────────────────────────────────────────────────────────

      fontFamily: {
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },

      // Animaciones custom preservadas del proyecto original
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "scale(0.9) translateY(-20px)" },
          to:   { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in":    "fade-in 0.3s ease-out",
        "bounce-slow":"bounce-slow 2s ease-in-out infinite",
        "slide-up":   "slide-up 0.5s ease-out",
      },

      backdropBlur: {
        sm: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
