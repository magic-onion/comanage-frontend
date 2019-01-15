const init = {
  toggled: false,
  currentCommunity: "",
  containerView: "",
  currentMember: "",
  currentRoom: "",
  rooms: [],
  members: [],
  roomMembers: []
}


function detailReducer(state = init, action) {
  switch (action.type) {

    case "VIEW_ROOM_DETAILS":
    let newState = action.payload
    return newState
    case "VIEW_MEMBER_DETAILS":
    let commState = {...state, rooms: action.payload.rooms, members: action.payload.members}
    return commState
    case "HOLD_COMMUNITY":
    const {payload: {community}} = action
    let communityState = {...state, name: community.name, start_date: community.start_date, rooms: community.rooms, members: community.members, roomMembers: community.roommembers}
    return communityState
    default:
    return state
  }

}

export default detailReducer
