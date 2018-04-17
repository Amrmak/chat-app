import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div className="message">
        <span id="sender" className="sender">
          {this.props.from}:
        </span>&nbsp;
        <span id="message" className="content">
          {this.props.content}
        </span>&nbsp;
        <span id="time-stamp" className="time-stamp">
          {this.props.date}
        </span>
      </div>
    );
  }
}
