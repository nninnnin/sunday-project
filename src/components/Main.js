import React from "react";
import "../styles/Main.scss";

import { handleZoom } from "../utils/main.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleZoom = handleZoom.bind(this);
  }

  state = {
    edit_mode: false,
    activeTab: this.props.activeTab,
    tabName: "",
    desc: "",
    zoom: "",
  };

  // hover등으로 status바가 rerender 되는경우, 해당 컴포넌트의 리렌더를 막기 위해
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState || this.props.project !== nextProps.project) {
      return true;
    } else {
      return false;
    }
  }

  handleClick = (e) => {
    console.log("dd");
    const tab = e.target;
    const index = parseInt(tab.dataset.key);

    this.setState({
      activeTab: index,
    });
    console.log(this.state);
  };

  editClick = () => {
    let { edit_mode, desc } = this.state;

    if (edit_mode === false && process.env.NODE_ENV === "development") {
      desc = "let's edit!";
    } else {
      desc = "You are not authorized -_-+";
    }

    this.setState({
      edit_mode: !edit_mode,
      desc,
    });
  };

  render() {
    const { edit_mode, activeTab, zoom } = this.state;
    const { title, contents, href } = this.props.project;

    // console.log(contents); // 리렌더링 테스트하고싶다면..

    const mappedTabs = contents.map((content, index) => {
      const { tabName } = content;
      return (
        <button
          className={activeTab === index ? "active" : ""}
          onClick={this.handleClick}
          key={tabName} // 여기에 index주는건 anti pattern 이라고한다
          data-key={index}
          disabled={edit_mode ? true : false}
        >
          {tabName}
        </button>
      );
    });

    let img = this.props.project.contents[activeTab].img;
    let src =
      "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";
    if (img !== undefined && img.data !== undefined) {
      // img가 데이터스킴일 떄
      const imgData = Buffer(img.data).toString("base64");
      src = `${img.contentType},${imgData}`;
    }

    return (
      <div className="Main">
        <h2 className="title">{title}</h2>

        <div className="content">
          <div className="img-container" onClick={this.handleZoom}>
            <img
              className={zoom ? "zoom-in" : "zoom-out"}
              src={src}
              alt=""
              onMouseEnter={this.props.handleHover}
              onMouseOut={this.props.handleHover}
              data-hover="클릭하면 줌인/아웃이 가능합니다."
            />
          </div>
          <div className="tab" id="tabs">
            {mappedTabs}
            <button id="editBtn" onClick={this.editClick}>
              {edit_mode ? "done" : "edit"}
            </button>
          </div>

          <div className="desc">{contents[activeTab].desc}</div>
          <div className="href">{href}</div>
        </div>
      </div>
    );
  }
}

export default Main;
