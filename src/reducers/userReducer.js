function userReducer(state = {
  username: "",
  password: "",
  status: "manager",
  isLoggedIn: false,
  communities: [],
  selectedCommunity: null

}, action) {
  switch (action.type) {

    case "CREATE_USER":
    let newState = {...action.payload, status: state.status, isLoggedIn: true}
    return newState

    case "GET_USER_DATA":
    let userState = {...state, isLoggedIn: true, communities: action.payload}
    return userState

    case "LOGOUT":
    let logoutState = {...state, isLoggedIn: false, communities: []}
     console.log("logged out")
    return logoutState

    case "SELECT_COMMUNITY":
    let selectedState = {...state, selectedCommunity: action.payload}
    return selectedState

    case "MAKE_FIRST_COMMUNITY":
    let firstCommunityState = {...state, communities: [action.payload], selectedCommunity: action.payload.id}
    return firstCommunityState

    default:
    return state
  }
}

export default userReducer
