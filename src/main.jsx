import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { ChoiceContextProvider } from './Context/choiceContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ChoiceContextProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </ChoiceContextProvider>
  
    
  </StrictMode>,
)
