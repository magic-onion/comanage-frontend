import {getCommunity} from './community'
import { getRoomDetails} from './detail'

//Assigns a member to a room
export const createAssignment = (assignmentObject) => {
  return (dispatch) => {
    let config = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(assignmentObject)
    }
    fetch('http://localhost:3000/api/v1/roommembers', config).then(r=>r.json()).then(p => {
      console.log(p)
      dispatch(getCommunity(assignmentObject.roomMember.communityId))
      dispatch(getRoomAfterAssignment(assignmentObject.roomMember.roomId))
    })
  }
}

export const getRoomAfterAssignment = (roomId) => {
  return (dispatch) => {
    let config = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    }
    fetch(`http://localhost:3000/api/v1/rooms/${roomId}`, config).then(r=>r.json()).then(p => {
      dispatch(roomDetailAfterAssignment(p))
    })
  }
}

export const roomDetailAfterAssignment = (roomDetails) => ({type: "ROOM_DETAIL_AFTER_ASSIGNMENT", payload: roomDetails})
