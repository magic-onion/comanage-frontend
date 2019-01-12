import React from 'react'
import { connect } from 'react-redux'
import MemberContainer from './MemberContainer'
import RoomContainer from './RoomContainer'

class CommunityContainer extends React.Component {

  componentDidMount() {
    let communityConfig = {
      method: "GET",
      headers: {"Content-type": 'application/json', "Authorization": `Bearer ${localStorage.token}`}
    }
    fetch(`http://localhost:3000/api/v1/communities/${this.props.user.selectedCommunity}`, communityConfig).then(r=>r.json()).then(p=>{
      this.props.dispatch({type: "HOLD_COMMUNITY", payload: p})
    })
  }

  render() {
    console.log(this.props)
    const {props: {community: {name, start_date, rooms, members, roomMembers}}} = this
    return (
      <div className="community-container">
        <p>{name}, created: {start_date}</p>
        <RoomContainer rooms={rooms} members={members} roomMembers={roomMembers}/>
        <MemberContainer members={members} rooms={rooms} roomMembers={roomMembers}/>
      </div>
    )
  }
}

const mapStateToProps = ({user, community}) => ({ user, community})

export default connect(mapStateToProps)(CommunityContainer)
