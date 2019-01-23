import React from 'react'
import { connect } from 'react-redux'
import MemberContainer from './MemberContainer'
import RoomContainer from './RoomContainer'
import TodoManagerContainer from './TodoManagerContainer'

// import { Router, Route, Link } from 'react-router-dom'
import { getCommunity } from '../actions/community'
import { getCommunityTodos } from '../actions/todo'
import store from '../index'

class CommunityContainer extends React.Component {

  state = {
    showRoom: true,
    showTodos: false
  }

  componentDidMount() {
    this.props.getCommunity(store.getState().user.selectedCommunity)
    this.props.getCommunityTodos(store.getState().user.selectedCommunity)
  }

  toggleView = event => {
    let showRoom = !this.state.showRoom
    this.setState({showRoom})
  }

  toggleTodos = event => {
    let showTodos = !this.state.showTodos
    this.setState({showTodos})
  }



  render() {
    const {props: {community: {name}}} = this
    return (
      <div className="community-container">
        <h4>The {name} Community</h4>
        <button className="community-container-view-toggle" onClick={this.toggleView}>{this.state.showRoom ? "Members" : "Rooms"}</button>
        <button className="community-container-view-toggle" onClick={this.toggleTodos}>{this.state.showTodos ? "Hide Todos" : "Show Todos"}</button>
        {this.state.showRoom ? <RoomContainer /> : null}
        {!this.state.showRoom ? <MemberContainer /> : null }
        {this.state.showTodos? <TodoManagerContainer/> : null }
      </div>
    )
  }
}

const mapStateToProps = ({user, community}) => ({ user, community})

const mapDispatchToProps = dispatch => {
  return {
    getCommunity: id => dispatch(getCommunity(id)),
    getCommunityTodos: id => dispatch(getCommunityTodos(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityContainer)
