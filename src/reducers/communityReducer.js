function communityReducer(state = {
  communityName: "",
  rooms: 0,
  members: 0

}, action) {
  switch (action.type) {

    case "CREATE_COMMUNITY":
    let newState = action.payload
    return newState
    default:
    return state
  }
}

export default communityReducer
