function userReducer(state = {
  username: "",
  password: "",
  status: "manager",
  isLoggedIn: false,
  communities: [],
  selectedCommunity: null

}, action) {
  switch (action.type) {

    case "CREATE_USER":
    let newState = {...action.payload, status: action.payload.user.status, isLoggedIn: true}
    return newState

    case "SET_USER_DATA":
    let userState = {...state, isLoggedIn: true, communities: action.payload}
    return userState

    case "LOGOUT":
    let logoutState = {...state, isLoggedIn: false, communities: []}
    return logoutState

    case "SELECT_COMMUNITY":
    let selectedState = {...state, selectedCommunity: action.payload}
    return selectedState

    case "MAKE_FIRST_COMMUNITY":
    let firstCommunityState = {...state, communities: [action.payload], selectedCommunity: action.payload.id}
    return firstCommunityState

    default:
    return state
  }
}

export default userReducer


// in your action creator file
// export function fetchUser(token) {
//   return (dispatch) => {
//     return fetch(userURL, {
//       method: 'POST',
//       headers: Headers(),
//       body: JSON.stringify({ token })
//     })
//     .then(res => res.json())
//     .then(json => {
//       dispatch({ type: 'FETCH_USER', payload: json })
//     });
//   };
// };
//
//
// // in your component itself after you've imported the action creator
// function mapDispatchToProps(dispatch) {
//     fetchUser: (token) => dispatch(fetchUser(token))
// }
