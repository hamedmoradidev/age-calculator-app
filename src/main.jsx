import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material';
import inputTheme from './MUITheme.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={inputTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
