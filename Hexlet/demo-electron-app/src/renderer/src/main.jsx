import './styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App/>}/>
      </Routes>
    </StrictMode>
  </HashRouter>
)
