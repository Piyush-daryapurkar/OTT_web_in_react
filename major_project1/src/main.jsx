import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { VideoProvider } from './api/VideoContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VideoProvider>
    <App />
    </VideoProvider>
   
  </StrictMode>,
)
