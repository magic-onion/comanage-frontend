import React from 'react'
import { connect } from 'react-redux'
//the selection is not controlled
class MemberRoomAssigner extends React.Component {
  state = {
    start_date: "",
    end_date:  ""
  }

  handleSubmit = event => {
    let action = {type: "ASSIGN_MEMBER", payload: {
      memberId: this.props.member,
      roomId: event.target.parentElement.children[0].value,
      startDate: event.target.parentElement.children[1].value,
      endDate: event.target.parentElement.children[2].value
    }}
    this.props.dispatch(action)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <select>
          {this.props.rooms.map((room, i) => <option key={i} value={room.id}>{room.name}</option> )}

        </select>
        <input name="start_date" onChange={this.handleChange} type="date" value={this.state.start_date}/>
        <input name="end_date" onChange={this.handleChange} type="date" value={this.state.end_date}/>
        <button onClick={this.handleSubmit}>add</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    assignment: state.assignment
  }
}
export default connect(mapStateToProps)(MemberRoomAssigner)
