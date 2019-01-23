import React from 'react'
import TodoManagerCard from '../components/TodoManagerCard'
import { connect } from 'react-redux'
import { getCommunityTodos } from '../actions/todo'

class TodoManagerContainer extends React.Component {


  render() {
    return (
      <div className="todo-container">
      {this.props.todo.todos.length ? this.props.todo.todos.map((todo, i) => <TodoManagerCard key={i} todo={todo}/>) : "No Todos yet!"}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    community: state.community,
    todo: state.todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCommunityTodos: id => dispatch(getCommunityTodos(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoManagerContainer)
