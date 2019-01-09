import React from 'react'

class RoomEditor extends React.Component {

  render() {
    return(
      <div className="room-editor">
        <form>
          <input type="text" placeholder="room name"/> <br></br>
          <input type="number" placeholder="occupancy"/>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default RoomEditor
