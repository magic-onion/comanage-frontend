function userReducer(state = {
  username: "",
  password: "",
  status: "manager"
}, action) {
  switch (action.type) {

    case "CREATE_USER":
    let newState = action.payload
    return newState
    default:
    return state
  }
}

export default userReducer
