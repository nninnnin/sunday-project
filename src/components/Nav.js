import React, { Fragment } from "react";
import "../styles/Nav.scss";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <a href="/project">돌아가기</a>
        {process.env.NODE_ENV === "development" && (
          <Fragment>
            <Link to="/project">포트폴리오</Link>
            <Link to="/project/add">프로젝트 추가</Link>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Nav;
