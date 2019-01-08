import React, { Component } from 'react';
// import MemberContainer from './containers/memberContainer'
// import NavigationContainer from './containers/NavigationContainer'
// import SidebarContainer from './containers/SidebarContainer'
import CommunityMaker from './components/CommunityMaker'
import CommunityContainer from './containers/CommunityContainer'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Nature does not hurry, yet everything is accomplished.</h1>
      <CommunityMaker/>
      <CommunityContainer/>
      </div>
    );
  }
}

export default App;
