import React, { Component } from "react";
import { formatDate } from "../../helpers";
import MainHeader from "./MainHeader";
import Message from "./Message";
import MessageSender from "./MessageSender";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <MainHeader name={this.props.name} />
        <div className="chat">
          {this.props.publicMessages
            ? this.props.publicMessages.map(msg => {
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
