import React from 'react'
import MemberRoomContainer from './MemberRoomContainer'
import MemberFriendsContainer from './MemberFriendsContainer'
import TodoContainer from '../../../containers/TodoContainer'
import { connect } from 'react-redux'
import { getCommunityTodos } from '../../../actions/todo'

class MemberCommunityContainer extends React.Component {

  state = {
    toggleTodos: false
  }

  toggleTodos = event => {
    let toggleTodos = !this.state.toggleTodos
    if (this.state.toggleTodos) {
      this.setState({toggleTodos})
      this.props.getCommunityTodos(this.props.community.id)
    }
    else {
      this.props.getCommunityTodos(this.props.community.id)
      this.setState({toggleTodos})
    }

  }


  render() {
    return (

      <div className="member-community-container">
        <MemberRoomContainer/>
        <MemberFriendsContainer/>
        <button className="todo-toggle" onClick={this.toggleTodos}> show </button>
        { this.state.toggleTodos ? <TodoContainer/> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    community: state.community,
    memberView: state.memberView
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCommunityTodos: id => dispatch(getCommunityTodos(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberCommunityContainer)
