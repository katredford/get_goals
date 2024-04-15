import { InputHTMLAttributes, forwardRef } from 'react'
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


//typescript was getting upset about the size type so this will omit it since its not necessary
//includes value type for string
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    //  additional props specific to input component  
    value?: string; 
  }

function InputComponent(
    //recieves 'rest' that was put into the component whereever its being used
    { ...rest}: InputProps,
    //genaric type porovided by react, can be a DOM element or component instance
    ref: React.Ref<HTMLInputElement>

    
){
    return(
        //form control is from bootstrap
        <Form.Control
   
        {...rest}
        //makes sure ref is passed the correct type
        //guarantees mutablility 
        ref={ref as React.MutableRefObject<HTMLInputElement>}
        data-bs-theme="dark" 
      />
 
    )
}

 export const Input = forwardRef(InputComponent)

