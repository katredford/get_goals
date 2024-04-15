import React from 'react'
import { useEffect, useRef, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast'
import { Input } from './Input'
import {useTask} from './context/useTask'
import 'bootstrap/dist/css/bootstrap.css';
function AddTask() {
    const[ input, setInput] = useState<string>('')
    // const[ tasks, addTask] = useState<string[]>([])
    const {addTask} = useTask()
    //useRef is a react hook for creating mutable references to components or elements
    //HTMLInputElement is the type parameter, helps typescript understand the typ of element being referenced
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(inputRef.current) {
            //.focus() automaticall sets the cursor into the input
            inputRef.current.focus()
        }
    }, [])

    //react.formEvent is a synthetic type from React
    const handleSubmission = (e: React.FormEvent) => {
        e.preventDefault()
        
        //check to make sure the input isn't empty and trim whitespace
        if(input.trim() !== ''){
            //uses imported task context
            addTask(input)

            //clears out the input field
            setInput('')
            toast.success('Todo added successfully!')
        }else{
            toast.error('Todo field cannot be empty!')
        }
    }

    return(
        <>
        <div data-bs-theme="dark" style={{color:"white"}}>
        <Form  data-bs-theme="dark" onSubmit={handleSubmission}>
     <FloatingLabel
    
        controlId="floatingInput"
        label="Add Task"
        className="mb-3"
        data-bs-theme="dark"
      >
         <Input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
         
        />

        
      </FloatingLabel>

      
      <Button variant="dark" type="submit">
        Submit
      </Button>
      </Form>

      </div>

  
        </>
    )
}

export default AddTask