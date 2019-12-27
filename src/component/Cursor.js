import React, { Component } from "react";
import "../component/cursor.scss";

class Cursor extends Component {
  componentDidMount() {
    (() => {
      Math.clamp = (a, b, c) => {
        return Math.max(b, Math.min(c, a));
      };
    })();

    const qCursor = () => {
      const b = document.getElementsByTagName("body")[0];
      const cursor = document.getElementById("cursor");
      const cursor2 = document.getElementById("cursor2");

      const mouseMove = e => {
        // Custom Cursor
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursor2.style.left = e.clientX + "px";
        cursor2.style.top = e.clientY + "px";
      };

      b.addEventListener("mousemove", mouseMove);

      const cursorHover = e => {
        cursor2.classList.add("hover");
      };
      const cursorUnhover = e => {
        cursor2.classList.remove("hover");
      };
      cursorUnhover();

      const hovers = document.querySelectorAll(
        ".hover-target, a, .swiper-pagination-bullet"
      );

      const hoverHandler = hover => {
        hover.addEventListener("mouseover", cursorHover);
        hover.addEventListener("mouseout", cursorUnhover);
      };

      for (let i = hovers.length - 1; i >= 0; i--) {
        const hover = hovers[i];
        hoverHandler(hover);
      }
    };
    qCursor();
  }
  render() {
    return (
      <>
        <div id="cursor" className="cursor"></div>
        <div id="cursor2" className="cursor2"></div>
      </>
    );
  }
}

export default Cursor;
