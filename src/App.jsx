import { useState, useEffect } from "react";
import TodoInput from "./componenets/TodoInput"
import TodoList from "./componenets/TodoList"



function App() {
 


  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos : newList}))
  }

  const [todos,setTodos] = useState([])
  const[todoValue, setTodoValue] = useState('')

  function handleAddtodos(newTodo) {
    const newToDoList = [...todos, newTodo]
    persistData(newToDoList)
    setTodos(newToDoList)
  }
  function deleteTodos(index) {
    const newToDoList = todos.filter((todo,todoIndex) => 
      {return todoIndex != index})

    persistData(newToDoList)

    setTodos(newToDoList)
  }

  function editTodos(index) {
   const valueToBeEdited = todos[index]
   setTodoValue(valueToBeEdited)
   deleteTodos(index)
  
  }

  useEffect(() => {
    if(!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
     return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])

  return (
    <>
     <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue}handleAddtodos = {handleAddtodos}  />
     <TodoList editTodos = {editTodos} deleteTodos = {deleteTodos} todos = {todos}/>
       </>
  )
}

export default App
