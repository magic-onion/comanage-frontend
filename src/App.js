import React, { Component } from 'react';
import NavigationContainer from './containers/NavigationContainer'
import CommunityMaker from './components/CommunityMaker'
import CommunitiesContainer from './containers/CommunitiesContainer'
import CommunityContainer from './containers/CommunityContainer'
import UserMaker from './components/UserMaker'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// import MemberContainer from './containers/memberContainer'
// import SidebarContainer from './containers/SidebarContainer'
// import RoomCard from './components/RoomCard'
// import { Route, Switch, Redirect } from 'react-router-dom'


import './App.css';


class App extends Component {

  loggingOut = event => {
    localStorage.clear()
    this.props.dispatch({type: "LOGOUT"})
  }

  componentDidMount() {
    if (localStorage.token !== undefined) {
      let profileConfig = {
        method: "GET",
        headers: {"Content-type": 'application/json', "Authorization": `Bearer ${localStorage.token}`}
      }
      fetch('http://localhost:3000/api/v1/profile', profileConfig).then(r=>r.json()).then(p => {
        this.props.dispatch({type: "GET_USER_DATA", payload: p.communities})
      })
    }
  }


  render() {
    const {props: {isLoggedIn, selectedCommunity}} = this
    return (
      <div className="App">
        <h1>Nature does not hurry, yet everything is accomplished.</h1>
        <NavigationContainer loggingOut={this.loggingOut}/>
        {isLoggedIn ? <CommunityMaker/> : null}
        {isLoggedIn && !selectedCommunity ? <CommunitiesContainer/> : null }
        {selectedCommunity ? <CommunityContainer/> : null}
        {isLoggedIn ? null: <UserMaker/> }
      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    communities: state.user.communities,
    selectedCommunity: state.user.selectedCommunity
  }
}



export default withRouter(connect(mapStateToProps)(App));
