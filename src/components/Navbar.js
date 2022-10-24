import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar(props) {
  const [btnText, setBtnText] = useState("Dark");
  const [bgNavStyle, setBgNavStyle] = useState({
    bg: "light",
    nav: "light",
  });
  let changeScreenMode = () => {
    if (props.mode === "light") {
      document.body.style.backgroundColor = "#212529";
      setBtnText("Light");
      setBgNavStyle({
        bg: "dark",
        nav: "dark",
      });
      props.alert("Dark Mode Enabled", "danger");
      props.toggleMode();
    } else {
      document.body.style.backgroundColor = "#fff";
      setBtnText("Dark");
      setBgNavStyle({
        bg: "light",
        nav: "light",
      });
      props.alert("Light Mode Enabled", "success");
      props.toggleMode();
    }
  };
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg bg-${bgNavStyle.bg} navbar-${bgNavStyle.nav}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {props.title}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    {props.homeText}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success mx-2" type="submit">
                  Search
                </button>
                <button
                  type="button"
                  className={`btn btn-light`}
                  onClick={changeScreenMode}
                >
                  {btnText}
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  // ! isRequired means that the field is required
  homeText: PropTypes.string,
};
// ! Types of props must should be followed by this navbar.propTypes

Navbar.defaultProps = {
  title: "Set title here",
  homeText: "Set homeText here",
};
// ! If no Arguments are passed then the default value is set to the value
