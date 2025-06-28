import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import CustomHeader from './Header.jsx'
import HomePage from './pages/home.jsx'
import MerchPage from './pages/merch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/wax-input-website/">
      <CustomHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/merch" element={<MerchPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
