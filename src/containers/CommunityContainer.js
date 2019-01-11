import React from 'react'
import { connect } from 'react-redux'
import RoomCard from '../components/RoomCard'
import MemberContainer from './MemberContainer'

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
    const {props: {community: {name, start_date, rooms, members}}} = this
    return (
      <div className="community-container">
        <p>{name}, created: {start_date}</p>
        {rooms.map((room, i) => <RoomCard key={i} room={room}/>)}
        <MemberContainer members={members}/>
      </div>
    )
  }
}

const mapStateToProps = ({user, community}) => ({ user, community})

export default connect(mapStateToProps)(CommunityContainer)
