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
      console.log(p)
      dispatch(newCommunityTodo(p))
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
      console.log(p)
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
      console.log(p)
      dispatch(setCommunityTodos(p))

    })
  }
}

export const setCommunityTodos = todos => ({type: "GET_COMMUNITY_TODOS", payload: todos})

export const updateTodoReactions = obj => {
  return (dispatch) => {
    let updateBody = {
      todo: {
        community_id: obj.communityId,
        user_id: obj.userId,
        action: obj.action

      }
    }
    let config = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    }
    fetch(`http://localhost:3000/api/v1/todos/${obj.id}/`).then(r=>r.json()).then(p=> {

    })


  }
}
