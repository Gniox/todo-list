import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.signedUp = this.signedUp.bind(this);
  }
  signedUp() {
    let temp = {signUp: true, signUpScreen: false};
    console.log("hello dude");
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
      margin: "0 auto"
      // padding: "60"
    };
    var formStyle = {
      // display: "flex",
      // alignItems: "center",
      width: smaller ? "80%" : "40%",
      // height: "100%",
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
      borderColor: "transparent"
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
      // alignSelf: "center"
      // borderRadius: 20
    };
    return (
      <div style={container}>
        <form style={formStyle} onSubmit={this.signedUp}>
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input type="text" name="name" style={inputStyle} />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" name="email" style={inputStyle} />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input type="password" name="password" style={inputStyle} />
          <button style={buttonStyle}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
