import path from "path"
import { fileURLToPath } from "url" // <-- Import this to fix __dirname
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite" // <-- This is the plugin you've added
import { defineConfig } from "vite"

// --- This is the fix for __dirname in ES modules ---
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// -------------------------------------------------

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Initialize the plugin
  ],
  resolve: {
    alias: {
      // This alias now works correctly
      "@": path.resolve(__dirname, "./src"),
    },
  },
})