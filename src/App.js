import React, { Component } from 'react';
// import MemberContainer from './containers/memberContainer'
import NavigationContainer from './containers/NavigationContainer'
// import SidebarContainer from './containers/SidebarContainer'
import CommunityMaker from './components/CommunityMaker'
import CommunityContainer from './containers/CommunityContainer'
// import RoomCard from './components/RoomCard'
import UserMaker from './components/UserMaker'
import Logout from './components/Logout'

import './App.css';


class App extends Component {
  loggingOut = event => {
    localStorage.clear()
    console.log(localStorage)
  }


  render() {
    return (
      <div className="App">
      <Logout loggingOut={this.loggingOut}/>
      <h1>Nature does not hurry, yet everything is accomplished.</h1>
      <NavigationContainer/>
      <CommunityMaker/>
      <CommunityContainer/>
      <UserMaker/>
      </div>
    );
  }
}

export default App;
