import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "index.ts"),
            name: "ShadCNComponents",
            fileName: (format) => `shadcn-components.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom", "tailwindcss"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    tailwindcss: "TailwindCSS",
                },
            },
        },
    },
    resolve: {
        alias: {
            "@/components": path.resolve(__dirname, "./components"),
            "@/utils": path.resolve(__dirname, "./utils"),
        },
    },
});
