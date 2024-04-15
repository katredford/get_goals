import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
function App() {
 

  return (
    <>
    <Toaster position="bottom-center" />
    <AddTask />
    <TaskList />
    </>
  )
}

export default App
