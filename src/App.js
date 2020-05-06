import { hot } from "react-hot-loader/root";
import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Project from "./pages/Project.js";
import ProjectAdd from "./pages/ProjectAdd.js";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Project posts={this.props.posts} />
      <BrowserRouter>
        <Route
          exact
          path="/project"
          component={() => <Project posts={this.props.posts} />}
        />
        <Route path="/project/add" component={ProjectAdd} />
      </BrowserRouter>
    );
  }
}

export default hot(App);
