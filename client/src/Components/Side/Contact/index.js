import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div
        className={`contact ${this.props.selected ? "contact-selected" : ""}`}
      >
        <div className="contact-pic">
          <img src={this.props.pic} alt="contact-pic" />
        </div>
        <div className="contact-details">
          <p className="contact-name">{this.props.name}</p>
        </div>
      </div>
    );
  }
}
