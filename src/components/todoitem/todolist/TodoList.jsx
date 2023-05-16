import React, { useState } from 'react'

function TodoList(props) {
    const [value, setValue] = useState('')
    const valueHandler = (e) => {
        setValue(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const listData = {
            id: Math.random().toString(),
            value,
        }
        props.onAddTodo(listData)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="input-container">
                <input
                    type="text"
                    className="input-box-todo"
                    placeholder="Enter your todo"
                    value={value} onChange={valueHandler}

                />
                <button className="add-btn"
                >+</button>
            </div>
        </form>
    )
}

export default TodoList