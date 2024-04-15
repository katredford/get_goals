import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { TaskProvider } from './components/context/TaskContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskProvider>
    <App />
    </TaskProvider>
  </React.StrictMode>,
)
