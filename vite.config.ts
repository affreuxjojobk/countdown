// vite.config.ts
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  esbuild: {
    minifyIdentifiers: false, // ← Ajoute ça pour aider au debug
  },
});
