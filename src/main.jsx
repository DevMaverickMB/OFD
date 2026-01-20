import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './theme/metary-runtime.css'
import App from './App.jsx'
import { loadMetaryAssets } from './theme/loadMetaryAssets.js'

void loadMetaryAssets();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
