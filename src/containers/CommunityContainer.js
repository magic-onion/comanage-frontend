import React from 'react'
import MemberContainer from './memberContainer'
import RoomMaker from '../components/RoomMaker'
import RoomCard from '../components/RoomCard'
import { connect } from 'react-redux'


class CommunityContainer extends React.Component {
  constructor(props) {
    super(props)
    this.things = null
  }


  roomComponents = () => {
    let chungus = []
    for (let i=0; i < this.props.community.rooms; i++) {
      chungus.push(i)
    }

    return chungus.map((chung, i) => <RoomCard key={i}/>)
  }

  memberComponents = () => {
    let chungus = []
    if (this.props.community.members) {
      for (let i=0; i < this.props.community.members; i++) {
        chungus.push(i)
      }

      return chungus.map((chung, i) => <MemberContainer key={i}/>)

    }
  }

  renderCommunityTools() {
    const {props: {community}} = this
    if (community.rooms && community.members) {
      return(
        <div>
          <div>
            {this.roomComponents()}
          </div>
          <div>
            {this.memberComponents()}
          </div>
        </div>
      )
    }
  }



  render() {
    const {props: {community}} = this
    return(
      <div className="community-container">
      <button>Edit Community</button>
        <h1>Name: {community.communityName}</h1>
        <h3>Rooms {community.rooms}</h3>
        <p>Members: {community.members}</p>
        {this.renderCommunityTools()}
      </div>
    )
  }
}
const mapStateToProps = ({community}) => {
  return { community }
}

export default connect(mapStateToProps)(CommunityContainer)
