import React, { Fragment } from "react";

import Nav from "../components/Nav.js";
import Status from "../components/Status.js";

import "../styles/ProjectAdd.scss";
import * as utils from "../utils/main.js";

class ProjectAdd extends React.Component {
  constructor(props) {
    super(props);
    this.validator = utils.validator.bind(this);
    this.handleZoom = utils.handleZoom.bind(this);
    this.handleAdd = utils.handleAdd.bind(this);
    this.handleChange = utils.handleChange.bind(this);
    this.retrieveContent = utils.retrieveContent.bind(this);
    this.clearState = utils.clearState.bind(this);
    this.imageRegister = utils.imageRegister.bind(this);
    this.handleHover = utils.handleHover.bind(this);
    this.handleSubmit = utils.handleSubmit.bind(this);
  }

  state = {
    title: "",
    tabName: "설명",
    defaultImg:
      "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    img: "",
    zoom: false,
    desc: "",
    href: "",

    contents: [],

    activeTab: "",
    validated: null,
    statusMsg: "",
    status: "", // normal, success, alert
  };

  componentDidMount() {
    const { defaultImg } = this.state;
    this.setState({
      img: defaultImg,
    });
  }

  render() {
    const {
      title,
      tabName,
      img,
      zoom,
      desc,
      contents,
      href,
      activeTab,
      validated,
      statusMsg,
      status,
    } = this.state;

    const tabs = contents.map((content, index) => {
      return (
        <button
          className={activeTab === index.toString() ? "active" : ""}
          onClick={this.retrieveContent}
          data-key={index}
          key={content.tabName}
        >
          {content.tabName}
        </button>
      );
    });

    return (
      <Fragment>
        <Nav />
        <div className="Container">
          <div className="Main" id="addMain">
            <h2 className="title">
              <input
                type="text"
                placeholder="프로젝트 이름"
                name="title"
                value={title}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </h2>

            <div className="content">
              <div className="img-upload">
                <div className="img-container" onClick={this.handleZoom}>
                  <img
                    className={zoom ? "zoom-in" : "zoom-out"}
                    src={img}
                    alt="content image"
                    id="contentImg"
                    onMouseEnter={this.handleHover}
                    onMouseOut={this.handleHover}
                    data-hover="클릭하면 줌인/아웃이 가능합니다."
                  />
                </div>
                <input
                  type="file"
                  name="image"
                  id=""
                  onChange={this.imageRegister}
                  ref={(ref) => {
                    this.fileInput = ref;
                  }}
                />
              </div>

              <div className="tab" id="tabs">
                {tabs}
                <button
                  className="active"
                  id="tabName"
                  onClick={this.clearState}
                  ref={(ref) => {
                    this.tabNameBtn = ref;
                  }}
                >
                  <input
                    type="text"
                    placeholder="탭 제목"
                    name="tabName"
                    value={tabName}
                    onChange={this.handleChange}
                    onKeyUp={this.handleChange}
                    autoComplete="off"
                  />
                </button>
                <button
                  onClick={this.handleAdd}
                  disabled={validated ? false : true}
                  onMouseEnter={this.handleHover}
                  onMouseOut={this.handleHover}
                  data-hover="한탭배기 추가하실례예?"
                >
                  탭추가
                </button>
              </div>
              <div className="desc">
                <textarea
                  name="desc"
                  id=""
                  rows="12"
                  placeholder="탭 내용"
                  value={desc}
                  onChange={this.handleChange}
                  onKeyUp={this.handleChange}
                ></textarea>
              </div>
              <input
                type="text"
                name="href"
                placeholder="프로젝트 주소"
                value={href}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="footer">
              <button
                type="submit"
                onClick={this.handleSubmit.bind(this)}
                onMouseEnter={this.handleHover}
                onMouseOut={this.handleHover}
                data-hover="제출하시겠습니까?"
              >
                제출!
              </button>
            </div>
          </div>
        </div>
        <Status msg={statusMsg} status={status} />
      </Fragment>
    );
  }
}

export default ProjectAdd;
