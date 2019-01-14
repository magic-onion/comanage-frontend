export const loginUser = (userObj) => {
  return (dispatch) => {
    console.log(userObj)
    let userBody = {
      user: {
        username: userObj.username,
        password: userObj.password,
        status: "manager"
      }
    }
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userBody)
    }
      fetch('http://localhost:3000/api/v1/login', config).then(r=>r.json()).then(p=>{
        console.log("success", p.jwt)
        localStorage.setItem("token", p.jwt)
        dispatch(fetchProfile(userBody))
    })
  }
}

export const fetchProfile = (userBody) => {
  return (dispatch) => {
    let profileConfig = {
      method: "GET",
      headers: {"Content-type": 'application/json', "Authorization": `Bearer ${localStorage.token}`}
    }
    fetch('http://localhost:3000/api/v1/profile', profileConfig).then(r=>r.json()).then(p => {
      dispatch(setUserData(p))
    })
  }
}

export const newUser = (userObj) => {
  return (dispatch) => {
    let userBody = {
      user: {
        username: userObj.username,
        password: userObj.password,
        status: "manager"
      }
    }
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userBody)
    }
      fetch('http://localhost:3000/api/v1/users', config).then(r=>r.json()).then(p=>{
        localStorage.setItem("token", p.jwt)
        console.log("success")
        dispatch(createNewUser(userBody))
    })
  }
}

export const createNewUser = userBody => ({type: "CREATE_USER", payload: userBody})


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

export const setUserData = (userData) => ({type: 'SET_USER_DATA', payload: userData.communities})

export const logOut = () => ({type: "LOGOUT"})
