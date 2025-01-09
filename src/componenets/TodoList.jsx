import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList(props) {
 const {todos} = props

  return (
    <ul className='main'>
      {todos.map((todo, Todoindex) => (
       
       <TodoCard {...props} key={Todoindex} index={Todoindex} >
        <p>{todo}</p>
       </TodoCard>

      ))}
    </ul>
  )
}

