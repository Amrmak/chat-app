import React, { Component } from "react";

import SideHeader from "./SideHeader";
import Contact from "./Contact";

export default class Side extends Component {
  render() {
    return (
      <div className="side">
        <SideHeader
          name={this.props.username}
          pic="http://via.placeholder.com/40x40"
        />
        <section className="contacts">
          {this.props.users
            ? this.props.users.map(user => {
                if (user !== this.props.username) {
                  return (
                    <Contact
                      key={user}
                      name={user}
                      pic="http://via.placeholder.com/50x50"
                    />
                  );
                } else return null;
              })
            : "Loading..."}
        </section>
      </div>
    );
  }
}
