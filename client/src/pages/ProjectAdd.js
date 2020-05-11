import React, { Fragment } from "react";

import Nav from "../components/Nav.js";
import Status from "../components/Status.js";

import "../styles/ProjectAdd.scss";

class ProjectAdd extends React.Component {
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

  validator = () => {
    const { tabName, desc, activeTab } = this.state;
    if (tabName !== "" && desc !== "" && activeTab === "") {
      this.state.validated = true;
    } else {
      this.state.validated = false;
    }
  };

  handleChange = (e) => {
    const target = e.target;
    this.setState({
      [target.name]: target.value,
    });

    this.validator();
  };

  handleZoom = (e) => {
    this.setState((prevState) => {
      return { zoom: !prevState.zoom };
    });
    e.target.focus();
  };
  handleAdd = () => {
    this.validator();
    const { tabName, defaultImg, img, desc, contents } = this.state;

    const content = {
      tabName,
      img,
      desc,
    };
    contents.push(content);

    console.log(this.state);

    this.setState({
      tabName: "",
      img: defaultImg,
      desc: "",
      contents,
      validated: false,
    });
    this.fileInput.value = "";
  };

  retrieveContent = (e) => {
    const { contents } = this.state;
    const index = e.target.dataset.key;
    const content = contents[index];
    const { img, desc } = content;

    if (
      this.tabNameBtn.classList[0] === "active" &&
      (this.state.tabName !== "" || this.state.desc !== "")
    ) {
      if (!confirm("작성한 내용이 사라집니다! 괜찮으세요?")) {
        return;
      }
    }

    this.setState({
      tabName: "",
      img,
      desc,
      activeTab: index,
      validated: false,
    });

    this.tabNameBtn.classList.remove("active");
    this.fileInput.disabled = true;
  };

  clearState = () => {
    const target = this.tabNameBtn;
    if (target.classList[0] === "active") {
      return;
    }
    target.classList.add("active");
    this.setState({
      tabName: "",
      img:
        "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
      desc: "",
      activeTab: "",
    });
    this.fileInput.value = "";
    this.fileInput.disabled = false;
  };

  imageRegister = (e) => {
    const target = e.target;
    console.log(target);
    console.log(target.files); //FileList 객체
    console.log(target.files[0]); // File 객체
    const file = target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      const imgDataUri = e.target.result;

      this.setState({
        img: imgDataUri,
      });
    };

    reader.readAsDataURL(file);
  };

  handleHover = (e) => {
    const msg = e.target.dataset.hover;
    const { status } = this.state;
    //status가 'success' 또는 'alert'가 아닐때에만 동작
    if (!(status === "success" || status === "alert")) {
      if (e.type === "mouseenter") {
        // when mouse enter
        this.setState({
          statusMsg: msg,
          status: "normal",
        });
      } else {
        // when mouse out
        this.setState({
          statusMsg: "",
          status: "",
        });
      }
    }
  };

  async handleSubmit(e) {
    e.preventDefault();
    console.log("submit!");
    const { title, contents, href } = this.state;
    console.log(`title: ${title}`);
    console.log(`contents: ${contents}`);
    console.log(contents.length);
    console.log(`href: ${href}`);
    console.log(this.state);

    // valiadte states -> title, contents
    // 둘중 하나라도 없다면
    if (title === "" || contents.length === 0) {
      // do nothing
      console.log("not validated");
      this.setState({
        statusMsg: "뭐하는 짓이에욧!",
        status: "alert",
      });
      setTimeout(() => {
        this.setState({
          statusMsg: "",
          status: "",
        });
      }, 2000);

      return;
    }

    const project = {
      title,
      contents,
      href,
    };

    // 요청 보내면서 제출버튼 disable
    const result = await fetch("/project/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    console.log(result);
    // 요청 받아왔으면 enable

    this.setState({
      status: "success",
      statusMsg: "제출 완료되었습니다!",
    });
    setTimeout(() => {
      this.setState({
        status: "",
        statusMsg: "",
      });
    }, 2500);
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
