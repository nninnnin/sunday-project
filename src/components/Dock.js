import React from "react";
import "../styles/Dock.scss";
import Loader from "./Loader";

class Dock extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    loading: true,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.loading !== nextState.loading;
  }

  componentDidMount() {
    console.log("dock comp did mount!");
    const dock = document.querySelector(".dock");
    const imgs = document.querySelector(".imgs");

    // 가로스크롤
    // if (dock !== null) {
    //   dock.addEventListener("wheel", function (e) {
    //     e.preventDefault();
    //     if (e.deltaY > 0) imgs.scrollLeft += 15;
    //     else imgs.scrollLeft -= 15;
    //   });
    // }
  }

  handleClick = (e) => {
    const href = e.target.dataset.href;
    const index = e.target.dataset.index;
    this.props.getHref(href);
    console.log(this.props.projects);
    console.log(this.props.projects[index]);
    this.props.getProject(this.props.projects[index]);
  };
  handleOnload = () => {
    console.log("로드완료!");
    this.setState({
      loading: false,
    });
  };

  pageHandler = (e) => {
    const direction = e.target.classList[1];
    const imgs = document.querySelector(".imgs");
    if (direction === "fa-caret-right") {
      imgs.scrollLeft += 25;
    } else {
      imgs.scrollLeft -= 25;
    }
  };

  render() {
    const { loading } = this.state;
    const { projects, handleHover } = this.props;
    let imgs = null;
    imgs = projects.map((project, index) => {
      const { title, contents, href } = project;

      //imgs
      const imgData = contents[0].img;
      console.log(imgData);

      let src;

      if (imgData !== "{}" && imgData !== undefined) {
        const buf = Buffer(imgData.data);
        src = `${imgData.contentType},` + buf.toString("base64");
      } else {
        src = "imgs/post/undefined.jpg";
      }

      return (
        <div className="imgContainer" key={project._id}>
          {/* <div className="title">{title}</div> */}
          <div className="imgBox">
            <img
              src={src}
              alt="thumbnail"
              onClick={this.handleClick}
              data-href={href}
              data-index={index}
              data-hover={title}
              onMouseEnter={handleHover}
              onMouseOut={handleHover}
            />
          </div>
        </div>
      );
    });

    return (
      <div className="dock" onLoad={this.handleOnload}>
        <div className="imgs">
          {!loading && (
            <i className="fas fa-caret-left" onClick={this.pageHandler}></i>
          )}
          {loading && <Loader />}
          {imgs}
          {!loading && (
            <i className="fas fa-caret-right" onClick={this.pageHandler}></i>
          )}
        </div>
      </div>
    );
  }
}

export default Dock;
