import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { ThemeProvider } from './components/CustomComponents/themeProvider';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <App />
    </ThemeProvider>
  </StrictMode>,
)
ModuleRegistry.registerModules([AllCommunityModule]);