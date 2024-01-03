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
    outDir: 'dist', // Define o diretório de saída para 'dist' ou o diretório desejado
    assetsInlineLimit: 0,
    assetsInclude: ['**/*.+(png|jpe?g|gif|svg|woff2?|ttf|eot|json|robots.txt)'],
  },
}

