const init = {
  id: null,
  name: "",
  roomamount: 0,
  memberamount: 0,
  rooms: [],
  members: [],
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
    const {payload: {community, rooms, members}} = action
    let communityState = {...state, name: community.name, rooms: rooms, members: members, id: community.id}
    return communityState
    case "LOGOUT":
    return init
    default:
    return state
  }

}

export default communityReducer
