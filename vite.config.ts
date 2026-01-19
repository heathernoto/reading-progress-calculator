/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
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
