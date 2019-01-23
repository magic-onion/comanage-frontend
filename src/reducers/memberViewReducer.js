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
    console.log("toggle friend view")
    let memberDetailToggler = !state.toggled
    let memberDetailState = {...state, toggled: memberDetailToggler, currentMember: action.payload.user}
    return memberDetailState
    case "TOGGLE_MEMBER_ROOM_DETAILS":
    console.log("hi alex")
    let roomDetailToggler = !state.toggled
    return state
    case "SET_MEMBER_DETAIL_WINDOW":
    let memberWindowState = {...state, toggled: true, memberIsSelected: true, currentMember: action.payload.user}
    return memberWindowState
    case "SET_MEMBERVIEW_ROOM_DETAIL":
    let memberViewRoomState = {...state, toggled: true, memberIsSelected: false, roomIsSelected: true, currentRoom: action.payload.room, members: action.payload.members}
    return memberViewRoomState
    default:
    return state;
  }
}

export default memberViewReducer
