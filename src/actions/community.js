
//fetches the community after it is selected by the User
export const getCommunity = (selectedCommunity) => {
  return (dispatch) => {
    let communityConfig = {
      method: "GET",
      headers: {"Content-type": 'application/json', "Authorization": `Bearer ${localStorage.token}`}
    }
    fetch(`http://localhost:3000/api/v1/communities/${selectedCommunity}`, communityConfig).then(r=>r.json()).then(p=>{
      dispatch(setCommunity(p))
    })
  }
}

export const setCommunity = (communityData) => ({type: "HOLD_COMMUNITY", payload: communityData})
