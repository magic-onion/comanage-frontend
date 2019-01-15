const init = {
  toggleRommEditPane: false,
  toggled: false,
  roomIsSelected: false,
  memberIsSelected: false,
  currentCommunity: "",
  containerView: "",
  currentMember: "",
  currentRoom: {},
  rooms: [],
  members: [],
  roomMembers: []
}


function detailReducer(state = init, action) {
  switch (action.type) {

    case "TOGGLE_ROOM_DETAIL_VIEW":
      if (action.payload.room.name === state.currentRoom) return state
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
    // let commState = {...state, rooms: action.payload.rooms, members: action.payload.members}
    // return commState


    default:
    return state
  }

}

export default detailReducer
