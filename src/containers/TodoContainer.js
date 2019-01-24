import React from 'react'
import TodoCard from '../components/TodoCard'
import TodoMaker from '../components/TodoMaker'
import { connect } from 'react-redux'
import { getCommunityTodos } from '../actions/todo'

class TodoContainer extends React.Component {


  render() {
    console.log(this.props)
    return (
      <div className="todo-member-container">
      <TodoMaker/>
      {this.props.todo.todos.map((todo, i) => <TodoCard key={i} todo={todo}/>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
