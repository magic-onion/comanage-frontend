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
    default:
    return state;
  }
}

export default memberViewReducer
