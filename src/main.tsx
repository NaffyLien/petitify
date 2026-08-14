import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ResumeProvider } from './contexts/ResumeProvider'
import AppRoutes from './routes'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <BrowserRouter>
      <ResumeProvider>
        <AppRoutes />
      </ResumeProvider>
    </BrowserRouter>
  </StrictMode>,
)
