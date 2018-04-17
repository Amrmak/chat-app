import React, { Component } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3030");

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      username: "",
      socketId: "",
      users: []
    };
  }

  componentDidMount = () => {
    socket.on("connect", () => {
      this.setState({ socketId: socket.id });

      socket.on("online users", users => {
        this.setState({ users });
      });

      socket.on("private message", (msg, from) => {
        console.log(`${from}: ${msg}`);
      });

      socket.on("user connected", user => {
        console.log(`${user} connected`);
      });
    });
  };

  setUsername = e => {
    e.preventDefault();
    let username = document.querySelector("#username").value;
    socket.emit("set username", username, isUnique => {
      if (isUnique) {
        this.setState({ username });
      } else {
        alert("Username Exists");
      }
    });
  };

  sendPrivateMessage = e => {
    e.preventDefault();
    let recieverUsername = document.querySelector("#recieverSelect").value;
    socket.emit("private message", this.state.msg, socket.id, recieverUsername);
    this.setState({ msg: "" });
  };

  render() {
    return (
      <div>
        <form action="">
          <input type="text" name="username" id="username" />
          <button onClick={e => this.setUsername(e)}>Set Username</button>
        </form>

        <h2>Username: {this.state.username}</h2>
        <div>
          <h3>Online Users:</h3>
          <ul>
            {this.state.users.map(username => {
              return <li key={username}>{username}</li>;
            })}
          </ul>
        </div>

        <h3>Send Message:</h3>
        <form action="">
          <select name="recieverSelect" id="recieverSelect">
            {this.state.users.length > 0 ? (
              this.state.users.map(username => {
                if (username !== this.state.username) {
                  return (
                    <option key={username} value={username}>
                      {username}
                    </option>
                  );
                } else {
                  return (
                    <option key="placeholder" value="0">
                      0 Online
                    </option>
                  );
                }
              })
            ) : (
              <option value="0">0 Online</option>
            )}
          </select>
          <input
            type="text"
            name="inputMsg"
            id="inputMsg"
            value={this.state.msg}
            onChange={e => this.setState({ msg: e.target.value })}
          />
          <button type="submit" onClick={e => this.sendPrivateMessage(e)}>
            Send
          </button>
        </form>
      </div>
    );
  }
}
