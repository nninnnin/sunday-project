import React from "react";
import "../styles/Dock.css";

class Dock extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    console.log("dock comp did mount!");
    const dock = document.querySelector(".dock");
    const imgs = document.querySelector(".imgs");

    console.log(dock, imgs);

    // 가로스크롤
    if (dock !== null) {
      dock.addEventListener("wheel", function (e) {
        e.preventDefault();
        if (e.deltaY > 0) imgs.scrollLeft += 50;
        else imgs.scrollLeft -= 50;
      });
    }
  }

  handleClick = (e) => {
    const href = e.target.dataset.href;
    this.props.getHref(href);
  };

  render() {
    const { projects } = this.props;

    const imgs = projects.map((project) => {
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
          <div className="title">{title}</div>
          <div className="imgBox">
            <img
              src={src}
              alt="thumbnail"
              onClick={this.handleClick}
              data-href={href}
            />
          </div>
        </div>
      );
    });

    return (
      <div className="dock">
        <div className="imgs">{imgs}</div>
      </div>
    );
  }
}

export default Dock;
