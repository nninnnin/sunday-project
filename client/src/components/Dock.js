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

  render() {
    const { projects } = this.props;

    const imgs = projects.map((project) => {
      const { title, contents, href } = project;

      //imgs
      const imgData = contents[0].img;
      console.log(imgData);

      let img;

      if (imgData !== "{}" && imgData !== undefined) {
        const buf = Buffer(imgData);
        img = (
          <img
            src={`data:image/png;base64,` + buf.toString("base64")}
            alt="thumbnail"
          />
        );
      } else {
        img = <img src={"imgs/post/undefined.jpg"} alt="thumbnail" />;
      }

      return (
        <div className="imgContainer" key={project._id}>
          <div className="title">{title}</div>
          <div className="imgBox">{img}</div>
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
