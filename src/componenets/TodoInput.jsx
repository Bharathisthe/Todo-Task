import { useState } from "react"

export default function TodoInput(props) {

    const {handleAddtodos,todoValue, setTodoValue} = props
    

    return ( 
    <header>
        <input placeholder="Enter Todo..." value={todoValue} onChange={(e) => {setTodoValue(e.target.value)}}></input>
        <button onClick={() => {handleAddtodos(todoValue) 
            setTodoValue('')}}>ADD</button>
        </header>
    )

}