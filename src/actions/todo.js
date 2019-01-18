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

    })
  }
}

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
