import React, { Component } from "react";
import "../styles/Preview.scss";
// import Loader from "./Loader";

class Preview extends Component {
  state = {
    loading: false,
  };

  render() {
    return (
      <div className="Preview">
        <div className="frame-container">
          <iframe
            className={this.state.loading ? "slime" : "question"}
            src={this.props.href}
            scrolling="no"
            frameBorder="0"
          ></iframe>
          프로젝트 미리보기
        </div>
      </div>
    );
  }
}

export default Preview;
