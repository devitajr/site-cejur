// const path = require('path')
import path from 'path'
import react from '@vitejs/plugin-react'

export default {
  root: path.resolve(__dirname, 'src'),
  // root: path.resolve(__dirname),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8081,
    hot: true
  },
  plugins: [react()],
  publicDir: "public", 
  build: {
    // outras configurações de build...
    rollupOptions: {
      output: {
        dir: 'dist', // ajuste conforme sua estrutura de pastas
      },
    },
    // Adicione uma configuração para copiar o robots.txt
    assetsInlineLimit: 0,
    assetsInclude: ['robots.txt'],
  },
}

