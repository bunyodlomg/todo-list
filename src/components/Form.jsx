import React, { useState } from 'react'
import './Form.css'
function Form({ setData }) {
    const [todo, setTodo] = useState('')
    console.log(todo);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.value)
        if (e !== '') {
            let item = {
                id: Date.now(),
                text: todo,
                selected: false,
            }
            setData((prev) => {
                return [...prev, item]
            })
            setTodo('')
        }

    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <input id='input' className='input' type="text"
                placeholder="Add new list item"
                required
                autoComplete='off'
                onChange={(e) => {
                    setTodo(e.target.value)
                }}
                value={todo} />
            {(todo.trim() !== '') &&
                <button className='btn'
                    type='submit'
                    onClick={handleSubmit}>
                    Add
                </button>
            }

        </form >
    )
}

export default Form