import React, { Component } from "react";

export default class MainHeader extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="recipient-details">
          <div className="recipient-pp">
            <img src="http://via.placeholder.com/40x40" alt="recipient-pic" />
          </div>
          <p className="recipient-name">Room</p>
        </div>
        <div className="recipient-actions" />
      </header>
    );
  }
}
