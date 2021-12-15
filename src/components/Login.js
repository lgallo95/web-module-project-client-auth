import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/login', this.state.credentials)
      .then(resp=> {
        const { token } = resp.data;
        localStorage.setItem("token", token);
        this.props.history.push('/friends');
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    console.log(this.state.credentials)
    return (
      <div>
        <h1> Log In Here </h1>
        <form onSubmit={this.login}>
        <label> Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label> Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
