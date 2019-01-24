import React from 'react'
import { connect} from 'react-redux'
import { updateTodoReactions } from '../actions/todo'

class Reactions extends React.Component {

  state = {
    likes: this.props.todo.likes,
    boos: this.props.todo.boos,
    id: this.props.todo.id
  }

  static getDerivedStateFromProps(props, state) {
  if (props.todo.todos !== undefined ) {
    let todoInQuestion = props.todo.todos.filter(todo => todo.id === state.id)
    if (state.likes !== todoInQuestion.likes || state.booss !== todoInQuestion.boos) {
      return {...state, likes: todoInQuestion.likes, boos: todoInQuestion.boos, id: todoInQuestion.id}
    }
  }
    return state
  }



  handleLikes = event => {
    if (event.target.id === "like") {
      let likes = this.state.likes + 1
      this.setState({likes})
    }
  }

  handleBoos = event => {
    if (event.target.id === "boo") {
      let boos = this.state.boos + 1
      this.setState({boos})
    }
  }


handleSubmission = event => {
  if (this.state.likes !== this.props.todo.likes || this.state.boos !== this.props.todo.boos) {
    let todoBody = {
      id: this.props.todo.id,
      todo: {
        likes: this.state.likes,
        boos: this.state.boos,
        community_id: this.props.community.id
      }
    }
    console.log("firing update")
    this.props.updateTodoReactions(todoBody)
  }
}



  render() {
    return (
      <div className="reactions" onMouseLeave={this.handleSubmission}>
        <div onClick={this.handleLikes} className="todo-likes" id="like">
          <span id="like">Likes: {this.state.likes}</span>
        </div>
        <div onClick={this.handleBoos} className="todo-boos" id="boo">
          <span id="boo">Boos: {this.state.boos}</span>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Reactions)
