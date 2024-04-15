
import { useContext} from 'react'
import { TaskContext } from './TaskContext'

export const useTask = () => {

    //hooks into the taskcontext and gets the value
    const context = useContext(TaskContext)

    //throws error if context doesn't have a value
    if(!context) {
        throw new Error('useTask must be witin TaskProvider')
    }

    return context
}