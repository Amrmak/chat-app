import React, { Component } from "react";
import io from "socket.io-client";

import Auth from "./Components/Auth";
import Side from "./Components/Side";
import Main from "./Components/Main";

export default class App extends Component {
  state = {
    username: null,
    socket: null,
    users: null,
    messages: null
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevState.username && this.state.username) {
      const socket = io("http://localhost:3030", {
        query: {
          id: this.state.username
        }
      });
      this.handleSocket(socket);
      this.setState({ socket });
    }
  };

  handleUsername = username => {
    this.setState({ username });
  };

  handleSocket = socket => {
    socket.on("online users", users => {
      this.setState({ users });
    });
    socket.on("messages", messages => {
      console.log(messages);
      this.setState({ messages });
    });
    socket.on("public message", messages => {
      this.setState({ messages });
    });
  };

  render() {
    if (this.state.socket) {
      return (
        <div className="chat-app-container">
          <Side username={this.state.username} users={this.state.users} />
          <Main socket={this.state.socket} messages={this.state.messages} />
        </div>
      );
    } else {
      return <Auth onUsernameSubmit={this.handleUsername} />;
    }
  }
}
