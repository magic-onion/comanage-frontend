const init = {
  name: "",
  roomamount: 0,
  memberamount: 0,
  start_date: "",
  rooms: [],
  members: []

}


function communityReducer(state = init, action) {
  switch (action.type) {

    case "CREATE_COMMUNITY":
    let newState = action.payload
    return newState
    case "SAVED_COMMUNITY":
    let commState = {...state, rooms: action.payload.rooms, members: action.payload.members}
    return commState
    case "HOLD_COMMUNITY":
    const {payload: {community}} = action
    let communityState = {...state, name: community.name, start_date: community.start_date, rooms: community.rooms, members: community.members}
    return communityState
    default:
    return state
  }

}

export default communityReducer
