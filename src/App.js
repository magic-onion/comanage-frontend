import React, { Component } from 'react';
import MemberContainer from './containers/memberContainer'
import NavigationContainer from './containers/NavigationContainer'
import SidebarContainer from './containers/SidebarContainer'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavigationContainer/>
        <MemberContainer />
        <SidebarContainer />
      </div>
    );
  }
}

export default App;
