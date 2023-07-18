import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

// se crea el estado inicial
const initialState = []
// esto es para lograr la persistencia de los datos de manera local
const init = () => {
  return JSON.parse(localStorage.getItem('toDo')) || []
}

export const useTodos = () => {
  // el dispatch se utiliza en este caso para indicar que 'despacha' acciones al reducer
  // el useReducer se compone del reducer, el estado inicial y un tercer que puede ser una funcion inicializadora
  const [toDo, dispatchToDo] = useReducer(todoReducer, initialState, init)

  // vamos a guardar en el localStorage el elemento cada vez que exista un cambio (un nuevo elemento)
  useEffect(() => {
    localStorage.setItem('toDo', JSON.stringify(toDo))
  }, [toDo])

  const handleTodo = (todo) => {
    // se crea la accion
    const action = {
      type: 'Add Todo',
      payload: todo
    }
    // la accion se "despacha" mediante el dispatch
    dispatchToDo(action)
  }
  const handleBorrarToDo = (id) => {
    dispatchToDo({
      type: 'Borrar ToDo',
      payload: id
    })
  }
  const handleToggleTodo = (id) => {
    dispatchToDo({
      type: 'Toggle ToDo',
      payload: id
    })
  }

  const pendingTodos = () => {
    return toDo.filter(toDo => !toDo.done).length
  }

  const todoCount = () => {
    return toDo.length
  }
  return {
    toDo,
    handleTodo,
    handleBorrarToDo,
    handleToggleTodo,
    pendingTodos,
    todoCount
  }
}
