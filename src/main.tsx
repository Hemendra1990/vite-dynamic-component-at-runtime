import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import DataContextProvider from './DataContext';
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <h1>Vite + React</h1>
      <PrimeReactProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </PrimeReactProvider>
    </ErrorBoundary>
  </StrictMode>,
)
