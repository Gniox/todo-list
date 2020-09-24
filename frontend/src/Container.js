import React from "react";
import TodoList from "./ToDoList";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Burger from "./Burger/Burger";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: true,
      login: false,
      windowWidth: 0,
      windowHeight: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.signUpStatus = this.signUpStatus.bind(this);
  }
  signUpStatus() {
    this.setState({
      signup: false
    });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
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
      backgroundColor: "#e8c090"
      // justifyItems: 'center',
    };
    if (this.state.signup) {
      return (
        <div style={todoListContainer}>
          <SignUp
            windowWidth={this.state.windowWidth}
            next={this.signUpStatus}
          ></SignUp>
        </div>
      );
    } else if (this.state.login) {
      return (
        <div style={todoListContainer}>
          <LogIn windowWidth={this.state.windowWidth}></LogIn>
        </div>
      );
    } else {
      return (
        <div style={todoListContainer}>
          <Burger></Burger>
          <TodoList windowWidth={this.state.windowWidth}></TodoList>
        </div>
      );
    }
  }
}

export default Container;
