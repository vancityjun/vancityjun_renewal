import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
const style = {
  position: "fixed",
  right: 20,
  bottom: 20
};
class ScrollTop extends Component {
  render() {
    return (
      <div className="scrollTop" style={style}>
        <a href="# ">
          <FontAwesomeIcon icon={faArrowCircleUp} size={"3x"} />
        </a>
      </div>
    );
  }
}

export default ScrollTop;
