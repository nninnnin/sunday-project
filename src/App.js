import { hot } from "react-hot-loader";
import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Project from "./pages/Project.js";
import ProjectAdd from "./pages/ProjectAdd.js";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  state = {
    projects: [],
  };

  async componentDidMount() {
    const response = await fetch("/project/api");
    if (response.status >= 400) {
      throw new Error("Failed to fetch data");
    }

    console.log(response);
    const data = await response.json();

    console.log(data);

    this.setState({
      projects: data,
    });
  }

  render() {
    const { projects } = this.state;
    return (
      <BrowserRouter>
        <Route
          exact
          path="/project"
          component={() => <Project projects={projects} />}
        />
        <Route path="/project/add" component={ProjectAdd} />
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
