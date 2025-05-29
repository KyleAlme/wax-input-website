import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CustomHeader from './Header.jsx'
import HomePage from './pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHeader />
    <HomePage />
  </StrictMode>,
)
