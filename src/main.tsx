import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReadingCalculator from './ReadingCalculator.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReadingCalculator />
  </StrictMode>,
)
