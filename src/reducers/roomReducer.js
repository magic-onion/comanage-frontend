// ////////////////////// CURRENTLY UNUSED

//const init = {
//   id: 0,
//   name: "",
//   occupancy: 0,
//   members: [],
//   roomMembers: []
// }
//
// function roomReducer(state = init, action) {
//   switch (action.type) {
//
//     case "INIT_ROOM":
//     let mountedState = {...state, id: action.payload.id, name: action.payload.name, occupancy: action.payload.occupancy}
//     return mountedState
//     // case "EDIT_ROOM":
//     // let newState = {...state, name: action.payload.name, occupancy: action.payload.occupancy}
//     // let config = {
//     //   method: "PATCH",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //     "Authorization": `Bearer ${localStorage.token}`
//     //   },
//     //   body: JSON.stringify({
//     //     room: {
//     //       name: newState.name,
//     //       occupancy: newState.occupancy
//     //     }
//     //   })
//     // }
//     // fetch(`http://localhost:3000/api/v1/rooms/${state.id}`, config).then(r=>r.json()).then(console.log)
//     // return newState
//     default:
//     return state
//   }
//
// }
//
// export default roomReducer
