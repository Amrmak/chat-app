import React, { Component } from "react";
import io from "socket.io-client";
import Auth from "./Components/Auth";
import Main from "./Components/Main";
import Side from "./Components/Side";

export default class App extends Component {
  state = {
    username: null,
    socket: null,
    users: null,
    publicMessages: null,
    selectedContact: null
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevState.username && this.state.username) {
      const socket = io("http://localhost:3030", {
        query: {
          id: this.state.username
        }
      });
      this.handleSocket(socket);
      this.setState({
        socket
      });
    }
  };

  handleUsername = username => {
    this.setState({ username });
  };

  handleSocket = socket => {
    socket.on("online users", users => {
      this.setState({ users });
    });
    socket.on("messages", publicMessages => {
      console.log(publicMessages);
      this.setState({ publicMessages });
    });
    socket.on("public message", publicMessages => {
      this.setState({ publicMessages });
    });
  };

  handleSelectedContact = username => {
    this.setState({ selectedContact: username });
  };

  render() {
    if (this.state.socket) {
      return (
        <div className="chat-app-container">
          <Side
            username={this.state.username}
            users={this.state.users}
            onSelectContact={this.handleSelectedContact}
          />
          <Main
            socket={this.state.socket}
            publicMessages={this.state.publicMessages}
            name={this.state.selectedContact}
          />
        </div>
      );
    } else {
      return <Auth onUsernameSubmit={this.handleUsername} />;
    }
  }
}
