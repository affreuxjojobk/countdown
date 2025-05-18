<<<<<<< HEAD:vite.config.ts
// vite.config.ts
export default defineConfig({
=======
import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
export default {
>>>>>>> 445a71b (Mise à jour URL API et configuration .env ignoré + sentry pour le frontend V3 (+frontend)):vite.config.js
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
<<<<<<< HEAD:vite.config.ts
  esbuild: {
    minifyIdentifiers: false, // ← Ajoute ça pour aider au debug
  },
});
=======
};
>>>>>>> 445a71b (Mise à jour URL API et configuration .env ignoré + sentry pour le frontend V3 (+frontend)):vite.config.js
