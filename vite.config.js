import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // This switches the minifier to esbuild, which won't crash on that comment
    cssMinify: 'esbuild' 
  }
})
