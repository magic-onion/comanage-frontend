const init = {
  username: "",
  password: "",
  status: "",
  isLoggedIn: false,
  communities: [],
  selectedCommunity: null

}


function userReducer(state = init, action) {
  switch (action.type) {

    case "CREATE_USER":
    let newState = {...action.payload, status: action.payload.user.status, isLoggedIn: true}
    return newState

    case "SET_USER_DATA":
    console.log(action)
    let userState = {...state, isLoggedIn: true, communities: action.payload.communities, status: action.payload.user.status}
    return userState


    case "SELECT_COMMUNITY":
    let selectedState = {...state, selectedCommunity: action.payload}
    return selectedState
    //
    // case "MAKE_FIRST_COMMUNITY":
    // let firstCommunityState = {...state, communities: [action.payload], selectedCommunity: action.payload.id}
    // return firstCommunityState

    case "LOGOUT":
    let logoutState = init
    return logoutState
    default:
    return state
  }
}

export default userReducer
