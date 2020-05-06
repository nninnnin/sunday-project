import React, { Fragment } from "react";

import Nav from "../components/Nav.js";
import Main from "../components/Main.js";

import tabs from "../../public/data/tabs.json";

const ProjectAdd = () => {
  return (
    <Fragment>
      <Nav />
      <Main tabs={tabs} />
    </Fragment>
  );
};

export default ProjectAdd;
