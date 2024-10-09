import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import ErrorBoundary from './ErrorBoundary'
import DataContextProvider from './DataContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ErrorBoundary>
  </StrictMode>,
)
