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
      dispatch(showDetailView(p))
    })
  }
}


export const showDetailView = (roomDetails) => ({type: "TOGGLE_ROOM_DETAIL_VIEW", payload: roomDetails})
