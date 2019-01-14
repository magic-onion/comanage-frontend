export const getUser = () => {
  return (dispatch) => {
      let profileConfig = {
        method: "GET",
        headers: {"Content-type": 'application/json', "Authorization": `Bearer ${localStorage.token}`}
      }
      fetch('http://localhost:3000/api/v1/profile', profileConfig).then(r=>r.json()).then(userData => {
        dispatch(setUserData(userData))
      })
  }
}

export const setUserData = (userData) => ({type: 'GET_USER_DATA', payload: userData.communities})

export const logOut = () => ({type: "LOGOUT"})
