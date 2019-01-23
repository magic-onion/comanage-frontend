import React from 'react'
import MemberRoomContainer from './MemberRoomContainer'
import MemberFriendsContainer from './MemberFriendsContainer'
import TodoContainer from '../../../containers/TodoContainer'
import MemberViewDetailViewer from '../components/MemberViewDetailViewer'
import MemberRoomDetail from '../components/MemberRoomDetail'
import TodoMaker from '../../TodoMaker'
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
    }
    else {
      this.props.getCommunityTodos(this.props.community.id)
      this.setState({toggleTodos})
    }

  }


  render() {
    return (

      <div className="member-community-container">
        <TodoMaker/>
        <MemberRoomContainer/>
        <MemberFriendsContainer/>
        {this.props.memberView.toggled && this.props.memberView.memberIsSelected ? <MemberViewDetailViewer/> : null}
        {this.props.memberView.toggled && this.props.memberView.roomIsSelected ? <MemberRoomDetail/> : null}
        <button onClick={this.toggleTodos}> show </button>
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
