import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// main.jsx is the entry point that runs the React app

// This selector is grabbing the id with value of root from the index.html file

// I believe this renders the app component on top of the div element that has id value of "root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
