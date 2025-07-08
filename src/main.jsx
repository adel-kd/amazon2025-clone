import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './Components/DataProvider/DataProvider.jsx'
import { initialState, reducer } from './Utility/reducer.jsx'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
    </ErrorBoundary>
  </StrictMode>
);
