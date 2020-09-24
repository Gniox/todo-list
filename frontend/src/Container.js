import React from "react";
import Nav from "./Nav";
import Burger from "./Burger/Burger";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: true,
      signup: false,
      signUpScreen: true,
      logIn: false,
      logInScreen: false
    };
    this.navStatus = this.navStatus.bind(this);
  }
  navStatus(object) {
    if (object != null) {
      if (this.state.first) {
        this.setState({
          signUp: object.signUp,
          signUpScreen: object.signUpScreen,
          logIn: object.logIn,
          logInScreen: object.logInScreen,
          first: object.first
        });
      } else {
        this.setState({
          signUp: object.signUp,
          signUpScreen: object.signUpScreen,
          logIn: object.logIn,
          logInScreen: object.logInScreen
        });
      }
    } 
  }
  render() {
    var todoListContainer = {
      display: "flex",
      // marginBottom: "auto",
      // justifyItems: 'center',
      // alignItems: 'center',
      width: "75%",
      // maxHeight: "85vh",
      height: "85vh",
      borderRadius: 20,
      backgroundColor: this.state.signUpScreen || this.state.logInScreen ? "transparent": "#e8c090",
      // justifyItems: 'center',
    };
    if (this.state.first) {
      return (
        <div style={todoListContainer}>
          <Nav
            screenState={this.state}
            navStatus={this.navStatus}
          ></Nav>
        </div>
      );
    } else {
      return (
        <div style={todoListContainer}>
          <Burger
            onClick={this.navStatus}
            screenState={this.state}
          ></Burger>
          <Nav screenState={this.state} navStatus={this.navStatus}></Nav>
        </div>
      );
    }
  }
}
