import React, { Component } from "react";

class Topbar extends Component {
  render() {
    return (
      <div className="top_bar">
        <a href="/" className="logo">
          <h1>
            <span>V</span>ancity <span>J</span>un
          </h1>
        </a>
        <div className="closeBtn" style={{ display: "none" }}>
          <span className="arrow"></span>
        </div>
        <button className="toggle-menu">
          <span></span>
        </button>
      </div>
    );
  }
}

export default Topbar;
