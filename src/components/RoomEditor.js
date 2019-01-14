import React from 'react'
import { connect } from 'react-redux'

class RoomEditor extends React.Component {

  state = {
    id: this.props.room.id,
    name: this.props.room.name,
    occupancy: this.props.room.occupancy
  }

  componentDidMount() {
    this.props.dispatch({
      type: "INIT_ROOM",
      payload: {
        id: this.state.id,
        name: this.state.name,
        occupancy: this.state.occupancy
      }
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({type: "EDIT_ROOM", payload: this.state})
  }

  render() {
    return(
      <div className="room-editor">
        <form onSubmit={this.handleSubmit}>
          <label>Room Name</label>
          <input onChange={this.handleChange} name="name" type="text" value={this.state.name}/> <br></br>
          <label>Occupancy</label>
          <input name="occupancy" onChange={this.handleChange} type="number" value={this.state.occupancy}/>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reduxRoom: state.room
  }
}

export default connect(mapStateToProps)(RoomEditor)
