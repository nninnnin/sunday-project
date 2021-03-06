import React, { Component, Fragment } from "react";

import Nav from "../components/Nav.js";
import Preview from "../components/Preview";
import Main from "../components/Main.js";
import Dock from "../components/Dock.js";
import Status from "../components/Status.js";

import { handleHover } from "../utils/main.js";

class Project extends Component {
  constructor() {
    super();
    this.handleHover = handleHover.bind(this);
  }

  state = {
    project: {
      title: "Untitled",
      contents: [
        {
          tabName: "none",
          img: "none",
          desc: "하단 썸네일을 클릭해보세요!",
        },
      ],
      href: "domain name",
    },
    statusMsg: "버튼에 마우스를 올려보세요 :)",
    status: "",
    activeComponent:"Preview"
  };

  getHref = (href) => {
    this.setState({
      href,
    });
  };

  getProject = (project) => {
    this.setState({
      project,
    });
  };

  handleClick = (e)=>{
    const target = e.currentTarget.classList[0];
    console.log(target)
    this.setState({
      activeComponent:target
    })
  }

  render() {
    const { href, project, status, statusMsg, loading , activeComponent} = this.state;
    const { projects } = this.props;
    return (
      <Fragment>
        <Nav />
        <div className="Container">
          <Preview href={href} handleHover={this.handleHover} handleClick={this.handleClick} active={activeComponent==='Preview'? true:false}/>
          <Main
            project={project}
            handleHover={this.handleHover}
            handleClick={this.handleClick}
            activeTab={0}
            key={project._id} // 이게 포인트!!
            active = {activeComponent==='Main'? true:false} 
          />
        </div>
        <Dock
          projects={projects}
          getHref={this.getHref}
          getProject={this.getProject}
          handleHover={this.handleHover}
        />
        <Status status={status} msg={statusMsg} />
      </Fragment>
    );
  }
}

export default Project;
