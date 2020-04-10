import React from "react";
import "../styles/Loader.scss";

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="loaderContainer">
        <div id="loader"></div>
      </div>
    );
  }
}

export default Loader;
