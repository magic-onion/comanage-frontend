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


function detailReducer(state = init, action) {
  switch (action.type) {

    case "TOGGLE_ROOM_DETAIL_VIEW":
      if (action.payload.room.name === state.currentRoom.name) {
        let toggleDetails = !state.toggled
        let hideDetails = {...state, toggled: toggleDetails}
        return hideDetails
      }
      else if (state.toggled) {
        let newState = {...state, roomIsSelected: true, memberIsSelected: false, currentRoom: action.payload.room, members: action.payload.room.members}
        return newState
      }
      else {
        let toggler = !state.toggled
        let newState = {...state, toggled: toggler, roomIsSelected: true, memberIsSelected: false, currentRoom: action.payload.room,  members: action.payload.room.members}
        return newState
      }

    case "TOGGLE_MEMBER_DETAIL_VIEW":
      let showMemberDetailState = {...state, toggled: true, memberIsSelected: true, currentMember: action.payload.member, rooms: action.payload.rooms}
      return showMemberDetailState
    default:
    return state
  }

}

export default detailReducer
