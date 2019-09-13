import React, { Component } from "react";
import { TweenMax, ScrollToPlugin, TweenLite, Power1 } from "gsap/all";
import $ from "jquery";
import "../component/cursor.scss";

class Cursor extends Component {
  componentDidMount() {
    (function() {
      Math.clamp = function(a, b, c) {
        return Math.max(b, Math.min(c, a));
      };
    })();

    function qCursor() {
      //   var w = window;
      const b = document.getElementsByTagName("body")[0];
      b.addEventListener("mousemove", mouseMove);
      var cursor = document.getElementById("cursor");
      var cursor2 = document.getElementById("cursor2");
      //   cursorUnhover();

      function mouseMove(e) {
        // Custom Cursor
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        console.log(e.clientX);
        console.log(e.clientY);
        console.log(cursor.style.left);
        console.log(cursor.style.top);
        cursor2.style.left = e.clientX + "px";
        cursor2.style.top = e.clientY + "px";
      }

      //   function cursorHover(e) {
      //     cursor2.classList.add("hover");
      //   }
      //   function cursorUnhover(e) {
      //     cursor2.classList.remove("hover");
      //   }

      var hovers = document.querySelectorAll(".hover-target");

      for (var i = hovers.length - 1; i >= 0; i--) {
        var hover = hovers[i];
        hoverHandler(hover);
      }

      function hoverHandler(hover) {
        // hover.addEventListener("mouseover", cursorHover);
        // hover.addEventListener("mouseout", cursorUnhover);
      }
    }
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
