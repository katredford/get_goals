import React, {createContext, useState} from 'react'
import {useLocalStorage} from 'usehooks-ts'

//includes two properties  an array of strings
// and a function that takes a string and has no return value
interface TaskContextProps {
    tasks: string[]
    addTask: (text: string) => void
}

//
export const TaskContext = createContext<TaskContextProps | undefined>(undefined,)

export const TaskProvider = (props: {children: React.ReactNode}) => {
    const [tasks, setTasks] = useState<string[]>([])


const addTask = (text: string) => {
    setTasks([...tasks,text])

}

const value: TaskContextProps = {
    tasks,
    addTask
}

return(
    <TaskContext.Provider value={value}>
        {props.children}
    </TaskContext.Provider>
)

}