import { setMemberViewCommunity } from './member'

//creates an instance of login
export const loginUser = (userObj) => {
  return (dispatch) => {
    let userBody = {
      user: {
        username: userObj.username,
        password: userObj.password
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
        localStorage.setItem("token", p.jwt)
        dispatch(getUser(userBody))
        if (p.user.status === "member" ){
          dispatch(getMemberData(p.user.id))
        }
    })
  }
}

export const getMemberData = id => {
  return (dispatch) => {
    let config = {
      method: "Get",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    }
    fetch(`http://localhost:3000/api/v1/users/${id}/member`, config).then(r=>r.json()).then(p => {
      console.log(p)
      dispatch(setMemberViewCommunity(p.community[0]))
    })
  }
}



//creates a new user ... does it log them in?
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
        console.log(p)
        dispatch(createNewUser(userBody))
    })
  }
}

export const createNewUser = userBody => ({type: "CREATE_USER", payload: userBody})

//repeat code of fetchProfile - figure out which one is used and delete accordingly
export const getUser = () => {
  return (dispatch) => {
      let profileConfig = {
        method: "GET",
        headers: {"Content-type": 'application/json', "Authorization": `Bearer ${localStorage.token}`}
      }
      fetch('http://localhost:3000/api/v1/profile', profileConfig).then(r=>r.json()).then(userData => {
        dispatch(setUserData(userData))
        if (userData.user.status === "member") {
          dispatch(getMemberData(userData.user.id))
        }
      })
  }
}

export const setUserData = (userData) => ({type: 'SET_USER_DATA', payload: {user: userData.user, communities: userData.communities}})

export const logOut = () => ({type: "LOGOUT"})
