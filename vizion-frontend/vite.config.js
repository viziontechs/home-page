
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// If you deploy to https://<username>.github.io/<repo-name>/ (no custom domain),
// change base below to '/<repo-name>/'. If you use a custom domain (e.g. a CNAME
// file, like viziontechs.com), leave it as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
 