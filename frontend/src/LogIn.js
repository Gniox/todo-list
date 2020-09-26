import React from "react";

let user_requests = require("./requests/user_requests");

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.skipLogIn = this.skipLogIn.bind(this);
    // this.state = this.state.bind(this);
  }
  componentdidMount = async () => {
    let token = localStorage.getItem("@user");
    console.log("component");
    if (token !== null) {
      let temp;
      temp = {
        signUp: false,
        signUpScreen: false,
        logIn: true,
        logInScreen: false,
        first: false,
      };
      console.log("Logged On");
      this.props.next(temp);
    }
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        this.setState({ email: value });
        errors.email = this.validateEmail(value) ? "" : "Email is not valid!";
        break;
      case "password":
        this.setState({ password: value });
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ [name]: value }, () => {
      console.log(errors);
    });
  };
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  loggedOn = async () => {
    let temp;
    let user = await user_requests.sendLogIn(
      this.state.email,
      this.state.password
    );

    await localStorage.setItem("@user", JSON.stringify(user));

    temp = {
      signUp: false,
      signUpScreen: false,
      logIn: true,
      logInScreen: false,
      first: false,
    };
    console.log("Logged On");
    this.props.next(temp);
  };
  signUp() {
    let temp;

    temp = {
      signUp: false,
      signUpScreen: true,
      logIn: false,
      logInScreen: false,
    };
    console.log("yoyoyo");
    this.props.next(temp);
  }
  skipLogIn() {
    let temp;

    temp = {
      signUp: false,
      signUpScreen: false,
      logIn: false,
      logInScreen: false,
      first: false,
    };
    this.props.next(temp);
  }
  render() {
    const width = this.props.windowWidth;

    const smaller = width < 600;

    var container = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // height: '20%',
      // width: "20%",
      margin: "0 auto",
      // padding: "60"
    };
    var formStyle = {
      // display: "flex",
      // alignItems: "center",
      width: smaller ? "80%" : "40%",
      // height: "80%",
      background: "#eb5e8d",
      padding: 20,
      // justifyContent: "center"
      // margin: "0 auto",
      // maxWidth: "360"
    };
    var inputStyle = {
      fontFamily: "sans-serif",
      fontSize: smaller ? 15 : 24,
      // marginRight: "auto",
      // marginLeft: "auto",
      // marginRight: 20,
      boxSizing: "border-box",
      marginBottom: 10,
      marginTop: 10,
      width: "100%",
      // height: "auto",
      // marginTop: 20,
      borderColor: "transparent",
      // borderRadius: 20
    };
    var buttonStyle = {
      fontFamily: "sans-serif",
      fontSize: smaller ? 15 : 24,
      // height: "auto",
      width: "100%",
      marginTop: 10,
      borderColor: "transparent",
      backgroundColor: "violet",
      cursor: "pointer",
      // alignSelf: "center"
      // borderRadius: 20
    };
    var headerStyle = {
      padding: 10,
      textAlign: "center",
      background: "#68609e",
      marginBottom: 10,
    };
    var skipButtonStyle = {
      background: "transparent",
      // width: "100%",
      borderColor: "transparent",
      marginTop: 10,
      cursor: "pointer",
    };
    var logInButtonStyle = {
      background: "transparent",
      // width: "100%",
      borderColor: "transparent",
      marginTop: 10,
      cursor: "pointer",
      // justifyContent: "flex-end"
    };
    var buttonContainer = {
      display: "flex",
      justifyContent: "space-between",
    };
    return (
      <div style={container}>
        <form style={formStyle} onSubmit={this.loggedOn}>
          <h1 style={headerStyle}>Log In</h1>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            style={inputStyle}
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            style={inputStyle}
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button style={buttonStyle}>Log In</button>
          <div style={buttonContainer}>
            <button style={skipButtonStyle} onClick={this.SignUp}>
              Sign Up
            </button>
            <button style={logInButtonStyle} onClick={this.skipLogIn}>
              Skip Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
