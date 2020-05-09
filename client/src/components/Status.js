import React, { Component } from "react";
import "../styles/Status.scss";

class Status extends Component {
  render() {
    const { msg, status } = this.props;
    return <div className={`Status ${status}`}>{msg}</div>;
  }
}

export default Status;
