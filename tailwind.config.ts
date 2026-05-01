import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        habitra: {
          deep: "#064E3B",
          action: "#22C55E",
          beige: "#F5F5DC",
          light: "#E5E7EB",
          text: "#1F2937",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
