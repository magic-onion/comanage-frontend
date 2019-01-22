
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


//creates a new Community
export const createCommunity = (communityObj) => {
  return (dispatch) => {
    const config = {
      method: "POST",
      headers: {
        "Authorization": `bearer ${localStorage.token}`,
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(communityObj)
    }
    fetch('http://localhost:3000/api/v1/communities', config).then(r=>r.json()).then(p => {
      console.log(p)
      // dispatch(getCommunity(p.community.id))
      // dispatch(selectCommunity(p.community.id))

    })
  }
}

export const selectCommunity = id => ({ type: "SELECT_COMMUNITY", payload: id})
