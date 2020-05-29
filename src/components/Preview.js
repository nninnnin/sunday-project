import React, { Component } from "react";
import "../styles/Preview.scss";
// import Loader from "./Loader";

class Preview extends Component {
  state = {
    loading: false,
  };

  render() {

    const {active, handleClick , handleHover} = this.props;

    return (
      <div className={`Preview ${(active? 'active': '')}`} onClick={handleClick} >
        <div
          className="frame-container"
          onMouseEnter={handleHover}
          onMouseOut={handleHover}
          data-hover="프로젝트 첫 화면 미리보기가 가능합니다. 클릭 및 휠 사용 불가!"
        >
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
