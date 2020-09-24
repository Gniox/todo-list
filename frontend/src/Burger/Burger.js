import React from "react";
import { StyledBurger } from "./Burger.styled";

export default class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
  }
  signUp() {
    let temp = { signUp: false, signUpScreen: true };
    console.log("Burger Button");
    this.props.onClick(temp);
  }
  render() {
    return (
      <StyledBurger onClick={this.signUp}>
        <div />
        <div />
        <div />
      </StyledBurger>
    );
  }
}
