import { setCommunity } from './community'

export const createNewroom = (roomObj) => {
  return (dispatch => {
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(roomObj)
    }
    fetch(`http://localhost:3000/api/v1/rooms`, config).then(r=>r.json()).then(p=> {
      let reducerBody = {community: p.community, rooms: p.community.rooms}
      console.log(p)
      dispatch(setNewRooms(reducerBody))
    })
  })
}

export const setNewRooms = (communityData) => ({type: "SET_NEW_ROOMS", payload: communityData})
