function userReducer(state = {
  username: "",
  password: "",
  status: "manager",
}, action) {
  switch (action.type) {

    case "CREATE_USER":
    let newState = {...action.payload, status: state.status}
    return newState
    break;
    default:
    return state
  }
}

export default userReducer
