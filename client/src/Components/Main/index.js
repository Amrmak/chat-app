import React, { Component } from "react";

import MainHeader from "./MainHeader";
import Message from "./Message";
import MessageSender from "./MessageSender";

import { formatDate } from "../../helpers";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <MainHeader />
        <div className="chat">
          {this.props.messages
            ? this.props.messages.map(msg => {
                return (
                  <Message
                    key={msg.date}
                    from={msg.sender}
                    content={msg.content}
                    date={formatDate(msg.date)}
                  />
                );
              })
            : "Loading..."}
        </div>
        <MessageSender socket={this.props.socket} />
      </div>
    );
  }
}
