import React from 'react'
import { useEffect, useRef, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Input } from './Input'
import 'bootstrap/dist/css/bootstrap.css';
function AddTask() {
    const[ input, setInput] = useState<string>('')
    const[ tasks, addTask] = useState<string[]>([])

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
            //creates array with previous tasks and adds new task at the end from input
            addTask([...tasks, input])

            //clears out the input field
            setInput('')
            console.log(input)
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