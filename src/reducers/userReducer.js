const init = {
  username: "",
  password: "",
  id: null,
  status: "",
  isLoggedIn: false,
  communities: [],
  selectedCommunity: null,
  error: ""
}


function userReducer(state = init, action) {
  switch (action.type) {

    case "CREATE_USER":
    let newState = {...action.payload, status: action.payload.user.status, isLoggedIn: true}
    return newState

    case "SET_USER_DATA":
    let userState = {...state, isLoggedIn: true, communities: action.payload.communities, status: action.payload.user.status, username: action.payload.user.username, id: action.payload.user.id}
    return userState


    case "SELECT_COMMUNITY":
    let selectedState = {...state, selectedCommunity: action.payload}
    return selectedState


    case "THROW_ERROR":
    let errorState = {...state, error: action.payload}
    return errorState

    case "CLEAR_ERROR":
    let errorFree = {...state, error: ""}
    return errorFree
    
    case "LOGOUT":
    let logoutState = init
    return logoutState
    default:
    return state
  }
}

export default userReducer
