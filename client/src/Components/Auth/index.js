import React, { Component } from "react";

export default class Auth extends Component {
  state = {
    username: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.username === "") {
      alert("Please enter a username");
      return;
    }
    fetch("http://localhost:3030/users")
      .then(res => res.json())
      .then(res => {
        let users = res.users;
        let userExists = users.find(user => {
          return user === this.state.username;
        });
        if (userExists) {
          alert("Username already exists");
        } else {
          this.props.onUsernameSubmit(this.state.username);
        }
      });
  };
  render() {
    return (
      <div className="landing-container">
        <h1>Welcome</h1>
        <form>
          <input
            type="text"
            placeholder="Enter Username..."
            onChange={e => this.setState({ username: e.target.value })}
          />
          <button type="submit" onClick={e => this.handleSubmit(e)}>
            GO
          </button>
        </form>
      </div>
    );
  }
}
