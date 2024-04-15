import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import './App.css'
import AddTask from './components/AddTask'

function App() {
 

  return (
    <>
    <Toaster position="bottom-center" />
    <AddTask />
    </>
  )
}

export default App
