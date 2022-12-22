import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Regina's e-book Library</h1>
      <div className="navigation">
        <nav>
          <NavLink className="homelink" to="/">
            {" "}
            Home{" "}
          </NavLink>{" "}
          |
          <NavLink className="aboutlink" to="/about">
            {" "}
            About{" "}
          </NavLink>{" "}
          |
          <NavLink className="bookcaselink" to="/bookcase">
            {" "}
            Bookcase ({props.bookLength})
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
