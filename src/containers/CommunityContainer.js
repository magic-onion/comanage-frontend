import React from 'react'
import { connect } from 'react-redux'
import MemberContainer from './MemberContainer'
import RoomContainer from './RoomContainer'
// import { Router, Route, Link } from 'react-router-dom'
import { getCommunity } from '../actions/community'
import store from '../index'

class CommunityContainer extends React.Component {

  state = {
    showRoom: true
  }

  componentDidMount() {
    this.props.getCommunity(store.getState().user.selectedCommunity)
  }

  toggleView = event => {
    let showRoom = !this.state.showRoom
    this.setState({showRoom})
  }

  render() {
    const {props: {community: {name}}} = this
    return (
      <div className="community-container">
        <h4>The {name} Community</h4>
        <button className="community-container-view-toggle" onClick={this.toggleView}>{this.state.showRoom ? "Members" : "Rooms"}</button>
        {this.state.showRoom ? <RoomContainer /> : null}
        {!this.state.showRoom ? <MemberContainer /> : null }
      </div>
    )
  }
}

const mapStateToProps = ({user, community}) => ({ user, community})

const mapDispatchToProps = dispatch => {
  return {
    getCommunity: id => dispatch(getCommunity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityContainer)
