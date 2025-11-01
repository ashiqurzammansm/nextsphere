// PATH: tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                brand: { DEFAULT: "#2563eb", dark: "#1e40af", light: "#60a5fa" },
                accent: { DEFAULT: "#a855f7", pink: "#ec4899" },
            },
            boxShadow: {
                soft: "0 10px 30px -10px rgba(37,99,235,0.25)",
                glow: "0 0 0 4px rgba(37,99,235,0.15), 0 25px 60px -20px rgba(59,130,246,0.55)",
                card: "0 12px 50px -20px rgba(0,0,0,0.35)",
            },
            borderRadius: { xl2: "1.25rem", xl3: "1.5rem", "2xl": "1.25rem", "3xl": "1.5rem" },
            backgroundImage: {
                "hero-gradient":
                    "radial-gradient(1200px 600px at 50% -10%, rgba(37,99,235,0.25), transparent 60%), radial-gradient(800px 400px at 80% 10%, rgba(168,85,247,0.22), transparent 60%), radial-gradient(1000px 500px at 20% 0%, rgba(236,72,153,0.18), transparent 60%)",
                glass: "linear-gradient( to bottom right, rgba(255,255,255,0.7), rgba(255,255,255,0.35) )",
                "glass-dark": "linear-gradient( to bottom right, rgba(17,24,39,0.7), rgba(17,24,39,0.35) )",
            },
            keyframes: {
                float: {
                    "0%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                    "100%": { transform: "translateY(0)" },
                },
                glow: {
                    "0%, 100%": { boxShadow: "0 0 0 0 rgba(37,99,235,0.0)" },
                    "50%": { boxShadow: "0 0 0 10px rgba(37,99,235,0.1)" },
                },
                shimmer: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100%)" } },
            },
            animation: {
                float: "float 10s ease-in-out infinite",
                floatFast: "float 8s ease-in-out infinite",
                floatSlow: "float 12s ease-in-out infinite",
                glow: "glow 3.5s ease-in-out infinite",
                shimmer: "shimmer 2.5s linear infinite",
            },
        },
    },
    plugins: [],
};

export default config;
