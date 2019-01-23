const init = {
  todos: []
}


function todoReducer(state = init, action) {
  switch (action.type) {

    case "GET_COMMUNITY_TODOS":
    console.log('setting state')
    let communityTodoState = {...state, todos: action.payload.todos}
    return communityTodoState
    case "ADD_SINGLE_TODO":
    let newTodoArray = state.todos
    newTodoArray.splice(0,0, action.payload)
    let addSingleTodoState = {...state, todos: newTodoArray}
    return addSingleTodoState
    case "AFTER_DELETE":
    let afterDeleteTodos = state.todos.filter(todo => todo.id !== action.payload)
    console.log(afterDeleteTodos)
    let afterDeleteState = {...state, todos: afterDeleteTodos}
    return afterDeleteState
    case "LOGOUT":
    let logoutState = init
    return logoutState
    default:
    return state
  }
}

export default todoReducer
