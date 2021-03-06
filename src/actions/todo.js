export const createTodo = taskObj => {
  return dispatch => {
    let config = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(taskObj)
    }
    fetch('http://localhost:3000/api/v1/todos', config).then(r=>r.json()).then(p=>{
      dispatch(newCommunityTodo(p))
      dispatch(getCommunityTodos(taskObj.todo.community_id))
    })
  }
}

export const newCommunityTodo = todo => ({type: "ADD_SINGLE_TODO", payload: todo.todo})

//fetch all todos why not lul
export const getTodos = () => {
  return dispatch => {
    let config = {
      method: "Get",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    }
    fetch('http://localhost:3000/api/v1/todos', config).then(r=>r.json()).then(p=>{
    })
  }
}

//fetch todos from a community:
export const getCommunityTodos = id => {
  return dispatch => {
    let config = {
      method: "Get",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    }
    fetch(`http://localhost:3000/api/v1/communities/${id}/gettodos`, config).then(r=>r.json()).then(p=>{
      dispatch(setCommunityTodos(p))

    })
  }
}


export const setCommunityTodos = todos => ({type: "GET_COMMUNITY_TODOS", payload: todos})

export const updateTodoReactions = obj => {
  return (dispatch) => {
    let updateBody = {todo: obj.todo}
    let config = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(updateBody)
    }
    fetch(`http://localhost:3000/api/v1/todos/${obj.id}/`, config).then(r=>r.json()).then(p=> {
        let payload = {todos: p}
        console.log(p)
      dispatch(setCommunityTodos(payload))
    })


  }
}

export const deleteTodo = obj => {
  return dispatch => {
    let config = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(obj.todo)
    }
    fetch(`http://localhost:3000/api/v1/todos/${obj.id}`, config).then(r=>r.json()).then(p=>{
      dispatch(todosAfterDelete(obj.id))
    })
  }
}

export const todosAfterDelete = id => ({type: "AFTER_DELETE", payload: id})
