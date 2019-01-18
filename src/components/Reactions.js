import React from 'react'

class Reactions extends React.Component {

  handleReaction = event => {
    console.log(event.target.id)
  }

  render() {
    return (
      <>
        <div onClick={this.handleReaction} className="todo-likes" id="like">
          <span id="like">Likes: {this.props.todo.likes.length}</span>
        </div>
        <div onClick={this.handleReaction} className="todo-boos" id="boo">
          <span id="boo">Boos: {this.props.todo.boos.length}</span>
        </div>
      </>
    )
  }
}

export default Reactions
