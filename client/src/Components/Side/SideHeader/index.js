import React, { Component } from "react";

export default class SideHeader extends Component {
  render() {
    return (
      <header className="side-header">
        <div className="user-details">
          <div className="user-pp">
            <img src={this.props.pic} alt="user-pic" />
          </div>
          <p className="username">{this.props.name}</p>
        </div>
        <div className="user-actions">
          <button className="add-contact"> + </button>
        </div>
      </header>
    );
  }
}
