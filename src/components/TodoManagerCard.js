import React from 'react'
import Reactions from './Reactions'
import moment from 'moment'
import { connect} from 'react-redux'
import { updateTodoReactions, deleteTodo } from '../actions/todo'

class TodoManagerCard extends React.Component {

  deleteTodo = event => {
    let deleteObj = {
      id: this.props.todo.id,
      todo: {
        community_id: this.props.community.id
      }
    }
    this.props.deleteTodo(deleteObj)
  }



  render() {
    return (
      <div onMouseLeave={this.handleSubmission} className="todo-card">
      <div className="todo-delete" onClick={this.deleteTodo}>X</div>
      <p><strong>{this.props.todo.user.username}</strong> <em>posted {moment(Date.parse(this.props.todo.created_at)).fromNow()}</em></p>
        <h6><em>{this.props.todo.body}</em></h6>
        <h5>Likes: {this.props.todo.likes}</h5>
        <h5>Boos: {this.props.todo.boos}</h5>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    community: state.community
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTodoReactions: obj => dispatch(updateTodoReactions(obj)),
    deleteTodo: obj => dispatch(deleteTodo(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoManagerCard)
