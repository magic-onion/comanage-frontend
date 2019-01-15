
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

//posts a new Community

export const createCommunity = (communityObj) => {
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

  })
}

// handleSubmit = event => {
//   event.preventDefault()
//   this.props.dispatch({type: "CREATE_COMMUNITY", payload: this.state})
//   this.setState({name: init.name, roomamount: init.roomamount, memberamount: init.memberamount})
//   const communityBody = {
//     community: store.getState().community
//   }
//   console.log(communityBody)
//   const config = {
//     method: "POST",
//     headers: {
//       "Authorization": `bearer ${localStorage.token}`,
//       "Content-Type": "Application/json"
//     },
//     body: JSON.stringify(communityBody)
//   }
//   console.log(config)
//   fetch('http://localhost:3000/api/v1/communities', config).then(r=>r.json()).then(p=>{
//     console.log(p)
//     this.props.dispatch({
//       type: 'SAVED_COMMUNITY',
//       payload: {
//         rooms: p.rooms,
//         members: p.members
//       }
//     })
//     if (this.props.user.communities === undefined) {
//       this.props.dispatch({type:"MAKE_FIRST_COMMUNITY", payload: p.community})
//     }
//   })
// }
