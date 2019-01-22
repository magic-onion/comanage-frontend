const init = {
  id: null,
  name: "",
  roomamount: 0,
  memberamount: 0,
  rooms: [],
  members: [],
  roomusers: []
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
    let communityState = {...state, name: community.name, rooms: rooms, members: members, roomusers: action.payload.roomusers, id: community.id}
    return communityState
    case "SET_NEW_ROOMS":
    console.log(action)
    let newRoomState = {...state, rooms: action.payload.rooms}
    console.log(newRoomState)
    return newRoomState
    case "SET_NEW_MEMBERS":
    let newMemberState = {...state, members: action.payload}
    return newMemberState
    case "SET_MEMBER_VIEW_COMMUNITY":
    console.log(action.payload)
    let memberViewCommunityState = {...state, id: action.payload.id, name: action.payload.name, rooms: action.payload.rooms, members: action.payload.members, roomusers: action.payload.roomusers}
    return memberViewCommunityState
    case "LOGOUT":
    let logoutState = init
    return logoutState
    default:
    return state
  }

}

export default communityReducer
