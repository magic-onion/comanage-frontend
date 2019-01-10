function communityReducer(state = {
  name: "",
  roomamount: 0,
  memberamount: 0,
  start_date: ""

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
