import React from 'react'

export default function TodoCard(props) {
    const {children, deleteTodos, index, editTodos} = props
  return (
    <div className='actionsContainer'>
      <li className='todoItem'>
        {children}
        <button onClick={() => {editTodos(index)}}>
        <i className="fa-solid fa-pen-to-square"></i>  
        </button>
      <button onClick={() => {deleteTodos(index)}}>

      <i className="fa-solid fa-trash"></i>

      </button>
         </li>
   
    </div>
   
  )
}
