import React from 'react'
import MemberCard from './MemberCard'
import {connect} from 'react-redux'

class DetailView extends React.Component {

  getRoomDetails() {
    if (this.props.detail.roomIsSelected) {
      return (
        <div>
          <h3>{this.props.detail.currentRoom}</h3>
          <h5>current assignees:</h5>
          { this.props.detail.members.length ? this.props.detail.members.map((member, i) => <MemberCard member={member} key={i}/>) : null }
        </div>
      )
    }
    else return null
  }


  render() {
    console.log(this.props.detail)
    return (
      <div className="detail-view">
        <h2>Detail View</h2>
        {this.getRoomDetails()}
      </div>
    )
  }
}

const mapStateToProps = ({assignment, room, community, user, detail}) => {
  return {assignment, room, community, user, detail }
}

export default connect(mapStateToProps)(DetailView)
