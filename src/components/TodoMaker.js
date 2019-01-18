import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../actions/todo'
import { getTodos } from '../actions/todo'

const init = {
  taskBody: ""
}

class TodoMaker extends React.Component {

  state = init

  editTask = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  createTodo = event => {
    event.preventDefault()
    let taskBody = {
      todo: {
        body: this.state.taskBody,
        user_id: this.props.user.id,
        community_id: this.props.community.id
      }
    }
    this.props.createTodo(taskBody)
    this.props.getTodos()
  }

  render() {
        console.log(this.props)
    return (
      <div className="todo-maker">
        <h2>Create a New Task</h2>
        <form onSubmit={this.createTodo}>
          <input onChange={this.editTask} name="taskBody" type="text" value={this.state.taskBody}/>
          <button type="submit">Create Task</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    community: state.community
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTodo: obj => dispatch(createTodo(obj)),
    getTodos: () => dispatch(getTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoMaker)