import React, { Component } from "react";

export default class Contact extends Component {
  handleContactClick = username => {
    let prevSelect = document.querySelector(".contact-selected");
    if (prevSelect) {
      prevSelect.classList.remove("contact-selected");
    }
    document
      .querySelector(`#${this.props.id}`)
      .classList.add("contact-selected");
    this.props.onSelect(username);
  };
  render() {
    return (
      <div
        id={this.props.id}
        // className="contact"
        className={`contact ${
          this.props.id === "PublicRoom" ? "contact-selected" : null
        }`}
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
