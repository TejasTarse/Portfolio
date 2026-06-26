/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: "#1e1b2e",
        muted: "#6b7280",
        brand: {
          purple: "#7c5cff",
          violet: "#9d6bff",
          blue: "#3b82f6",
          cyan: "#22d3ee",
          pink: "#ec4899",
          green: "#22c55e",
        },
      },
      boxShadow: {
        glass: "0 8px 30px rgba(124, 92, 255, 0.08)",
        card: "0 4px 24px rgba(30, 27, 46, 0.06)",
        glow: "0 0 24px rgba(124, 92, 255, 0.35)",
      },
      keyframes: {
        spinslow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spinslow: "spinslow 30s linear infinite",
      },
    },
  },
  plugins: [],
}
