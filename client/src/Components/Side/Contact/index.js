import React, { Component } from "react";

export default class Contact extends Component {
  handleContactClick = username => {
    let prevSelect = document.querySelector(".contact-selected");
    if (prevSelect) {
      prevSelect.classList.remove("contact-selected");
    }
    document.querySelector(`#${username}`).classList.add("contact-selected");
    this.props.onSelect(username);
  };
  render() {
    return (
      <div
        id={this.props.name}
        className="contact"
        onClick={() => this.handleContactClick(this.props.name)}
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
