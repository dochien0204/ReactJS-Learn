import React from 'react'
import './CourseInput.css'
import { useState } from 'react'
import Button from '../../UI/Button'


const CourseInput = (props) => {

    const [enteredInput, setEnteredInput] = useState('');
    const [isValid, setIsValid] = useState(true);



    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredInput.trim().length === 0)
        {
            setIsValid(false);
            setEnteredInput('');
            return;
        }
        else
        {
            props.addNewCourse(enteredInput);
        }
        setEnteredInput('');
    }

    const changeInputHandler = (event) => {
        if(event.target.value.trim().length > 0)
        {
            setIsValid(true);
            setEnteredInput(event.target.value);
        }
        else{
            setIsValid(false);
            setEnteredInput('');
        }
        
    }
    return (
      <form onSubmit={submitHandler}>
        <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
          <label>
            Course Goal
          </label>
          <input
            
            onChange={changeInputHandler}
            type="text"
            value={enteredInput}
          ></input>
        </div>
        <Button type="submit">Add New Course</Button>
      </form>
    );
}

export default CourseInput;