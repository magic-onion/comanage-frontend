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
        let roomToggle = !state.roomIsSelected
        let hideDetails = {...state, toggled: toggleDetails, roomIsSelected: roomToggle}
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
    if (action.payload.member.id === state.currentMember.id) {
      let toggleMemberDetails = !state.toggled
      let selectedMemberToggle = !state.memberIsSelected
      let toggleMemberDetailsState = {...state, toggled: toggleMemberDetails, memberIsSelected: selectedMemberToggle, roomIsSelected: false}
      return toggleMemberDetailsState
    }
      let showMemberDetailState = {...state, toggled: true, memberIsSelected: true, roomIsSelected: false, currentMember: action.payload.member, rooms: action.payload.member.rooms}
      return showMemberDetailState
    case "LOGOUT":
    let logoutState = {...state, toggled: false, roomIsSelected: false, memberIsSelected: false}
    return logoutState
    default:
    return state
  }

}

export default detailReducer
