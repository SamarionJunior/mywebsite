import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MyWebSite from './pages/MyWebSite'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyWebSite />
  </StrictMode>,
)
