import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * Emits a copy of index.html as spa.html. Cloudflare rejects a _redirects rule that
 * proxies to index.html as a loop, so public/_redirects points deep links at /spa.
 */
function spaShell(): Plugin {
  let outDir = 'dist'
  return {
    name: 'spa-shell',
    apply: 'build',
    configResolved: (config) => void (outDir = config.build.outDir),
    closeBundle: () => copyFileSync(join(outDir, 'index.html'), join(outDir, 'spa.html')),
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaShell()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    target: 'es2022',
    rolldownOptions: {
      output: {
        // Framework code changes rarely: keep it in its own long-cached chunk.
        advancedChunks: {
          groups: [
            {
              name: 'react',
              test: /node_modules[\\/](react|react-dom|react-router|scheduler)[\\/]/,
            },
          ],
        },
      },
    },
  },
})
