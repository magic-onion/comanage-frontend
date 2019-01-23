import React from 'react'
import Reactions from './Reactions'
import moment from 'moment'
import { connect} from 'react-redux'
import { updateTodoReactions } from '../actions/todo'

class TodoCard extends React.Component {

  // static getDerivedStateFromProps(props, state) {
  // if (props.todo.todos !== undefined ) {
  //   let todoInQuestion = props.todo.todos.filter(todo => todo.id === state.id)
  //   if (state.likes !== todoInQuestion.likes || state.booss !== todoInQuestion.boos) {
  //     return {...state, likes: todoInQuestion.likes, boos: todoInQuestion.boos, id: todoInQuestion.id}
  //   }
  // }
  //   return state
  // }





  render() {
    return (
      <div onMouseLeave={this.handleSubmission} className="todo-card">
      <p>{this.props.todo.user.status} <strong>{this.props.todo.user.username}</strong> <em>posted {moment(Date.parse(this.props.todo.created_at)).fromNow()}</em></p>
        <h2>{this.props.todo.body}</h2>
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
