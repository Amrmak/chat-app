import React, { Component } from "react";
import Contact from "./Contact";
import SideHeader from "./SideHeader";

export default class Side extends Component {
  handleSelectContact = username => {
    this.props.onSelectContact(username);
  };
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
                  // if username contains spaces, remove it
                  let id = user.replace(/\s/g, "");
                  return (
                    <Contact
                      key={user}
                      id={id}
                      name={user}
                      pic="http://via.placeholder.com/50x50"
                      onSelect={this.handleSelectContact}
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
