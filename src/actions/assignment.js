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
    })
  }
}

// const showNewAssignments = assignMentObject => (
//   "hello"
// )
