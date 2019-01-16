import {getCommunity} from './community'

//Fetches member data for the member detail pane which are users
export const getMemberDetails = (memberId) => {
  return (dispatch) => {
    let config = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    }
    fetch(`http://localhost:3000/api/v1/users/${memberId}`, config).then(r=>r.json()).then(p => {
      console.log(p)
      dispatch(showMemberDetailView(p))
    })
  }
}

export const showMemberDetailView = (memberDetails) => ({type: "TOGGLE_MEMBER_DETAIL_VIEW", payload: memberDetails})

//Update action for editing a member
export const memberEditSubmit = (memberObj, communityId) => {
  return (dispatch) => {
    let config = {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(memberObj)
    }
    fetch(`http://localhost:3000/api/v1/users/${memberObj.user.id}`, config).then(r=>r.json()).then(p => {
      console.log(p)
      dispatch(getMemberDetails(p.user.id))
    }).then(p => {
      dispatch(getCommunity(communityId))
    })
  }
}


//Fetches room data for the room detail pane
export const getRoomDetails = (roomId) => {
  return (dispatch) => {
    let config = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    }
    fetch(`http://localhost:3000/api/v1/rooms/${roomId}`, config).then(r=>r.json()).then(p => {
      dispatch(showRoomDetailView(p))
    })
  }
}

export const showRoomDetailView = (roomDetails) => ({type: "TOGGLE_ROOM_DETAIL_VIEW", payload: roomDetails})

//update action for editing a room
export const roomEditSubmit = (roomObj, communityId) => {
  return (dispatch) => {
    let config = {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(roomObj)
    }
    fetch(`http://localhost:3000/api/v1/rooms/${roomObj.room.id}`, config).then(r=>r.json()).then(p => {
      dispatch(getRoomDetails(p.room.id))
    }).then(p => {
      dispatch(getCommunity(communityId))
    })
  }
}
