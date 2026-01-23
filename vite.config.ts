/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['openBook.png'],
      manifest: {
        name: 'Reading Prgress Calculator',
        short_name: 'Reading Stats',
        description: 'Calculates student reading levels',
        theme_color: '#022b3a',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
  test: {
    globals: true,
    name: 'unit',
    environment: 'jsdom',
    // setupFiles: './src/tests/setup.ts', // Path to a file for running setup code before tests
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/public/**',
      '**/.vscode/**'
    ],
    includeSource: ['src/**/*.{js,ts}'],
  }
})
//https://vitest.dev/config/include.html
