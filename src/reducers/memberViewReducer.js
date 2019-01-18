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
    return state
    case "TOGGLE_MEMBER_ROOM_DETAILS":
    console.log("toggle member room details")
    return state



    default:
    return state;
  }
}

export default memberViewReducer
