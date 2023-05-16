import React, { useState } from "react";

function TodoItem(props) {

    return (
        <ul>
            {props.list.map((elem) => {
                return <li key={elem.id} className="list-item">
                    {elem.value}
                    <span className='icons'>
                        <i className="fa-solid fa-trash-can icon-delete"
                        ></i>
                        <button onClick={() => {
                            props.onDeleteList(elem.id)
                        }}>DELETE</button>
                    </span>
                </li>
            })}

        </ul>

    );
}

export default TodoItem