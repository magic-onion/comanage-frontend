import React from 'react'
import Reactions from './Reactions'
import moment from 'moment'

class TodoCard extends React.Component {


handleSubmission = event => {
  console.log("you stopped clicking")
}





  render() {
    console.log(moment(Date.parse(this.props.todo.created_at)).fromNow())
    return (
      <div onMouseLeave={this.handleSubmission} className="todo-card">
      <p>{this.props.todo.user.status} <strong>{this.props.todo.user.username}</strong> <em>posted {moment(Date.parse(this.props.todo.created_at)).fromNow()}</em></p>
        <h2>{this.props.todo.body}</h2>
        <Reactions todo={this.props.todo}/>

      </div>
    )
  }
}

export default TodoCard
