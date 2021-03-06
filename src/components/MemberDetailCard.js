import React from 'react'
import { getMembersRooms } from '../actions/member'
import { connect } from 'react-redux'


class MemberDetailCard extends React.Component {


  render() {
    return (

      <div className="member-card">
        <h1 className="room-detail-element">{this.props.member.username}</h1>
        <h6 className="room-detail-element">"{this.props.member.bio}"</h6>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    assignment: state.assignment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMembersRooms: id => dispatch(getMembersRooms(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailCard)


// <img src={this.props.member.image} alt={this.props.member.name}/>
