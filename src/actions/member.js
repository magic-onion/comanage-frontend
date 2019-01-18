// import { showMemberDetailView} from './detail'
// import { setCommunity } from './community'

//fetches the rooms for a given member
export const getMembersRooms = (id) => {
  return (dispatch) => {
    let config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    }
    fetch(`http://localhost:3000/api/v1/users/${id}/rooms`, config).then(r=>r.json()).then(p=>{

      dispatch(setMemberRooms(p))
    })
  }
}

export const setMemberRooms = response => ({type: "GET_MEMBER_ROOMS", payload: {rooms: response.rooms, roomMembers: response.roomMembers }})

//creating a new member
export const createNewMember = (memberObj) => {
  return (dispatch => {
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(memberObj)
    }
        console.log(config)
    fetch(`http://localhost:3000/api/v1/users/new`, config).then(r=>r.json()).then(p=> {
      dispatch(setNewMembers(p.members))
    })
  })
}

export const setNewMembers = (communityData) => ({type: "SET_NEW_MEMBERS", payload: communityData})


export const makeNewMemberRealMember = obj => {
  return (dispatch) => {
    console.log(obj)
    let memberBody = {
      user: obj.user
    }
    let config = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(memberBody)
    }
    console.log(config)
    fetch(`http://localhost:3000/api/v1/users/${obj.id}/authorize`, config).then(r=>r.json()).then(p => {

    dispatch(setMemberViewCommunity(p.community))
  })
  }
}

export const setMemberViewCommunity = (communityData) => ({type: "SET_MEMBER_VIEW_COMMUNITY", payload: communityData})

////////////////////////////////////////////

// memberView detail actions here - will hit the memberViewReducer
export const toggleFriendView = () => ({type: "TOGGLE_FRIEND_VIEW"})

export const toggleMemberViewRoomDetails = () => ({type: "TOGGLE_MEMBER_ROOM_DETAILS"})
