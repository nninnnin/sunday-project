import React, { Component } from "react";
import "../styles/Preview.scss";
class Preview extends Component {
  render() {
    return (
      <div className="Preview">
        <div className="frame-container">
          <iframe src={this.props.href} scrolling="no" frameBorder="0"></iframe>
          프로젝트 미리보기
        </div>
      </div>
    );
  }
}

export default Preview;
