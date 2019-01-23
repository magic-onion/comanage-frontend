const init = {
  toggled: false,
  roomIsSelected: false,
  memberIsSelected: false,
  currentCommunity: "",
  containerView: "",
  currentMember: {},
  currentRoom: {},
  rooms: [],
  members: [],
  roomMembers: []
}

function memberViewReducer(state=init, action) {
  switch (action.type) {

    case "TOGGLE_FRIEND_VIEW":
    let memberDetailToggler = !state.toggled
    let memberDetailState = {...state, toggled: memberDetailToggler, currentMember: action.payload.user}
    return memberDetailState
    case "TOGGLE_MEMBER_ROOM_DETAILS":
    // let roomDetailToggler = !state.toggled
    return state
    case "SET_MEMBER_DETAIL_WINDOW":
    console.log("toggle friend view", action.payload)
    let memberWindowState = {...state, toggled: true, memberIsSelected: true, currentMember: action.payload.user}
    return memberWindowState
    case "SET_MEMBERVIEW_ROOM_DETAIL":
    console.log("room deets", action.payload)
    let memberViewRoomState = {...state, toggled: true, memberIsSelected: false, roomIsSelected: true, currentRoom: action.payload.room, members: action.payload.members}
    return memberViewRoomState
    default:
    return state;
  }
}

export default memberViewReducer
