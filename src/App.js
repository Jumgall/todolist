import React, { useState } from 'react'
import "./App.css"
import TodoList from './components/todoitem/todolist/TodoList'
import TodoItem from './components/todoitem/todolist/TodoItem'

function App() {
  const [list,setList] = useState([])
  
  const listHandler = (data) => {
    setList([...list,data])
  }

  const deleteItem = (id) => {
    setList(list.filter((elem) => elem.id !== id))
  }

  return (
    <div className="main-container">
     <TodoList onAddTodo={listHandler} />
     <TodoItem list={list} onDeleteList={deleteItem} />
    </div>
  )
}

export default App