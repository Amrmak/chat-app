import React, { Component } from "react";

export default class MessageSender extends Component {
  state = {
    message: ""
  };

  handleSendMessage = e => {
    e.preventDefault();
    this.props.socket.emit("public message", {
      sender: this.props.socket.id,
      content: this.state.message,
      date: new Date(Date.now())
    });
    this.setState({ message: "" });
  };

  render() {
    return (
      <footer className="message-sender">
        <form action="">
          <input
            type="text"
            placeholder="Your message goes here..."
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
          />
          <button type="submit" onClick={e => this.handleSendMessage(e)}>
            Send
          </button>
        </form>
      </footer>
    );
  }
}
