import React, { Component } from "react";
import "../styles/Status.scss";

class Status extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { msg, status } = this.props;
    return <div className={`Status ${status}`}>{msg}</div>;
  }
}

// Status.defaultProps = {
//   msg: "상태바입니다",
// };

export default Status;
