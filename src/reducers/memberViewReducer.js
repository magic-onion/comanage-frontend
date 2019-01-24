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
    return state

    case "SET_MEMBER_DETAIL_WINDOW":

    if (!state.toggled && !state.memberIsSelected) {
      let memberWindowState = {...state, toggled: true, memberIsSelected: true, currentMember: action.payload.user}
      return memberWindowState
    }

    if (state.toggled && state.roomIsSelected) {
      let memberWindowState = {...state, toggled: true, memberIsSelected: true, currentMember: action.payload.user, currentRoom: {}, roomIsSelected: false}
      return memberWindowState
    }

    if (action.payload.user.id !== state.currentMember.id && state.toggled) {
      let memberWindowState = {...state, toggled: true, memberIsSelected: true, currentMember: action.payload.user, currentRoom: {}, roomIsSelected: false}
      return memberWindowState
    }
    if (action.payload.user.id === state.currentMember.id && state.toggled) {
      let hideState = {...state, toggled: false, memberIsSelected: false, currentMember: {}}
      return hideState
    }


    break;
    case "SET_MEMBERVIEW_ROOM_DETAIL":

    if (action.payload.room.id !== state.currentRoom.id && state.toggled) {
      let memberViewRoomState = {...state, toggled: true, memberIsSelected: false, roomIsSelected: true, currentRoom: action.payload.room, members: action.payload.members}
      return memberViewRoomState
    }
    if (action.payload.room.id === state.currentRoom.id && state.toggled) {
      let memberViewRoomState = {...state, toggled: false, memberIsSelected: false, roomIsSelected: false, currentRoom: {}, members: []}
      return memberViewRoomState
      }
    if (!state.roomIsSelected && !state.memberIsSelected && !state.toggled) {
      let memberViewRoomState = {...state, toggled: true, memberIsSelected: false, roomIsSelected: true, currentRoom: action.payload.room, members: action.payload.members}
      return memberViewRoomState
    }
    if (state.memberIsSelected && state.toggled) {
      let memberViewRoomState = {...state, toggled: true, memberIsSelected: false, roomIsSelected: true, currentRoom: action.payload.room, members: action.payload.members}
      return memberViewRoomState
    }
    break;
    default:
    return state;
  }
}

export default memberViewReducer
