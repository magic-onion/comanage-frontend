function userReducer(state = {
  username: "",
  password: "",
  status: "manager",
  isLoggedIn: false,
  communities: []
}, action) {
  switch (action.type) {

    case "CREATE_USER":
    let newState = {...action.payload, status: state.status}
    return newState
    case "GET_USER_DATA":
    let userState = {...state, isLoggedIn: true, communities: action.payload}
    return userState
    case "LOGOUT":
    let logoutState = {...state, isLoggedIn: false, communities: []}
     console.log("logged out")
    return logoutState
    default:

    return state
  }
}

export default userReducer
