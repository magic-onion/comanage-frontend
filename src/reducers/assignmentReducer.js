const init = {
  member_id: 0,
  room_id: 0,
  rooms: [],
  members: [],
  roomMembers: []
}

function assignmentReducer(state = init, action) {
  switch (action.type) {
    case "ASSIGN_MEMBER":
    let assignmentState = action.payload
    let config = {method: "POST", headers: {"content-type": "application/json", "Authorization": `Bearer ${localStorage.token}`}, body: JSON.stringify(assignmentState) }
    fetch('http://localhost:3000/api/v1/roommembers', config).then(r=>r.json()).then(console.log)
    return assignmentState

    case "GET_MEMBER_ROOMS":
    let memberRoomsState = {...state, rooms: action.payload.rooms, roomMembers: action.payload.roomMembers}
    console.log(memberRoomsState.rooms, memberRoomsState.roomMembers)
    return memberRoomsState

    default:
    return state
  }
}

export default assignmentReducer

//Is this reducer action even necessary? This should rerender for that particular member

//Should make a new one to assign members from rooms?
