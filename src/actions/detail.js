import {getCommunity} from './community'

export const getMemberDetails = (memberId) => {
  return (dispatch) => {
    let config = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    }
    fetch(`http://localhost:3000/api/v1/members/${memberId}`, config).then(r=>r.json()).then(p => {
      console.log(p)
      dispatch(showMemberDetailView(p))
    })
  }
}

export const showMemberDetailView = (memberDetails) => ({type: "TOGGLE_MEMBER_DETAIL_VIEW", payload: memberDetails})


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
      console.log(p)
      dispatch(showRoomDetailView(p))
    })
  }
}


export const showRoomDetailView = (roomDetails) => ({type: "TOGGLE_ROOM_DETAIL_VIEW", payload: roomDetails})

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
