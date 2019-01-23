import React from 'react'
import { connect } from 'react-redux'

class MemberViewDetailViewer extends React.Component {


  get rooms() {
    if (this.props.memberView.currentMember.rooms.length) {
      return (
        <div>
          <h4>assigned to:</h4>
          {this.props.memberView.currentMember.rooms.map((room, i) => <p key={i}>{room.name}</p>)}
        </div>
      )
    }
    return null
  }


  render() {
    console.log(this.props)
    return (
      <div className="member-view-member-detail-window">
      <h1>{this.props.memberView.currentMember.username}</h1>
      <h2>{this.props.memberView.currentMember.bio}</h2>
      <img src={require(`../../../assets/Icon-pngs/${this.props.memberView.currentMember.image}.png`)} alt="a member icon"></img>
      {this.rooms}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    memberView: state.memberView
  }
}

export default connect(mapStateToProps)(MemberViewDetailViewer)
