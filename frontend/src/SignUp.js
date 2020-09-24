import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }
  render() {
    return (
      <div>
        <p>This is the SignUp page</p>
      </div>
    )
  }
}

export default SignUp;
