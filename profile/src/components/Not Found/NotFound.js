import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import notFound from "../../images/notFound.png";

class NotFound extends Component {
  render() {
    return (
      <div>
        <img src={notFound} alt="404 Not Found" />
        <NavLink to="/">
          <button className="btn btn-success">
            <strong>Go To Home Page</strong>
          </button>
        </NavLink>
      </div>
    );
  }
}
export default NotFound;
