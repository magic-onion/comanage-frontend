const init = {
  todos: []
}


function todoReducer(state = init, action) {
  switch (action.type) {

    case "GET_COMMUNITY_TODOS":
    let communityTodoState = {...state, todos: action.payload.todos}
    return communityTodoState
    case "ADD_SINGLE_TODO":
    let addSingleTodoState = {...state, todos: state.todos.concat(action.payload)}
    return addSingleTodoState
    case "LOGOUT":
    let logoutState = init
    return logoutState
    default:
    return state
  }
}

export default todoReducer
