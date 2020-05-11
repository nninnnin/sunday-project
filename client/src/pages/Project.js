import React, { Component, Fragment } from "react";

import Nav from "../components/Nav.js";
import Preview from "../components/Preview";
import Main from "../components/Main.js";
import Dock from "../components/Dock.js";

import tabs from "../../../server/public/data/tabs.json";

class Project extends Component {
  state = {
    href: "",
  };
  getHref = (href) => {
    console.log(href);
    this.setState({
      href,
    });
  };
  render() {
    const { href } = this.state;
    const { projects } = this.props;
    return (
      <Fragment>
        <Nav />
        <div className="Container">
          <Preview href={href} />
          <Main tabs={tabs} />
        </div>
        <Dock projects={projects} getHref={this.getHref} />
      </Fragment>
    );
  }
}

export default Project;
