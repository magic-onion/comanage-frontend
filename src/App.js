import React, { Component } from 'react';
// import MemberContainer from './containers/memberContainer'
import NavigationContainer from './containers/NavigationContainer'
// import SidebarContainer from './containers/SidebarContainer'
import CommunityMaker from './components/CommunityMaker'
import CommunityContainer from './containers/CommunitiesContainer'
// import RoomCard from './components/RoomCard'
import UserMaker from './components/UserMaker'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'


import './App.css';


class App extends Component {

  loggingOut = event => {
    localStorage.clear()
    this.props.dispatch({type: "LOGOUT"})
  }

  componentDidMount() {
    if (!!localStorage.token) {
      let profileConfig = {
        method: "GET",
        headers: {"Content-type": 'application/json', "Authorization": `Bearer ${localStorage.token}`}
      }
      fetch('http://localhost:3000/api/v1/profile', profileConfig).then(r=>r.json()).then(p => {
        console.log(p)
        this.props.dispatch({type: "GET_USER_DATA", payload: p.communities})
      })
    }
  }


  render() {
    console.log(this.props.isLoggedIn)
    return (
      <div className="App">
      <Logout loggingOut={this.loggingOut}/>
      <h1>Nature does not hurry, yet everything is accomplished.</h1>
      <NavigationContainer/>
      <CommunityMaker/>
        {this.props.isLoggedIn ? <CommunityContainer/> : null }
      <UserMaker/>
      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  }
}



export default withRouter(connect(mapStateToProps)(App));
