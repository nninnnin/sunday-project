import React from "react";

import Nav from "../components/Nav.js";
import Main from "../components/Main.js";
import Dock from "../components/Dock.js";

import tabs from "../../public/data/tabs.json";
import { Fragment } from "react";

const Project = ({ posts }) => {
  return (
    <Fragment>
      <Nav />
      <Main tabs={tabs} />
      <Dock posts={posts} />
    </Fragment>
  );
};

export default Project;
