import {useTask} from './context/useTask'
import { ListGroup } from 'react-bootstrap'

 export default function Tasklist() {
    const {tasks} = useTask()

    if(!tasks.length) {
        return (
            <h1 style={{color:"white"}}>No Tasks</h1>
        )
    }

    return(
        <>
        {tasks.map(task => (
        // <li key={task}>{task}</li>
        <ListGroup.Item 
        variant="warning" 
        key={task}
        data-bs-theme="dark">
            {task}
            </ListGroup.Item>
      ))}
        </>
    )
}

// export default TaskList