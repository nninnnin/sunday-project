import React from "react";

import Nav from "../components/Nav.js";
import Preview from "../components/Preview";
import Main from "../components/Main.js";
import Dock from "../components/Dock.js";

import tabs from "../../../server/public/data/tabs.json";
import { Fragment } from "react";

const Project = ({ projects }) => {
  return (
    <Fragment>
      <Nav />
      <div className="Container">
        <Preview />
        <Main tabs={tabs} />
      </div>
      <Dock projects={projects} />
    </Fragment>
  );
};

export default Project;
