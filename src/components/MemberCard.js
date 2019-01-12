import React from 'react'
import MemberRoomAssigner from './MemberRoomAssigner'


class MemberCard extends React.Component {

  state = {
    assigning: false
  }

  assignMember = event => {
    let assigning = !this.state.assigning
    this.setState({assigning})
  }

  render() {
    console.log(this.props)
    return (

      <div className="member-card">
        <h1>{this.props.member.name}</h1>
        <img src={this.props.icon}/>
        <p></p>
        <button onClick={this.assignMember}>Edit/Assign</button>
        {this.state.assigning ? <MemberRoomAssigner rooms={this.props.rooms} member={this.props.member.id}/> : null}
      </div>
    )
  }

}

export default MemberCard


// let assignBody = {
//   member_id: this.props.member.id
//
// }
// let config = {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": `Bearer ${localStorage.token}`
//   },
//   body: JSON.stringify(assignBody)
// }
