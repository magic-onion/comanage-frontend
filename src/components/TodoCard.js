import React from 'react'
import Reactions from './Reactions'
import moment from 'moment'
import { connect} from 'react-redux'
import { updateTodoReactions } from '../actions/todo'

class TodoCard extends React.Component {





  render() {
    return (
      <div onMouseLeave={this.handleSubmission} className="todo-member-card">
      <p><strong>{this.props.todo.user.username}</strong>posted {moment(Date.parse(this.props.todo.created_at)).fromNow()}</p>
        <h6><em>{this.props.todo.body}</em></h6>
        <Reactions todo={this.props.todo}/>

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
    updateTodoReactions: obj => dispatch(updateTodoReactions(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCard)
