import React, { useEffect } from "react";
import $ from "jquery";
import "./loading.scss";

const Loading = () => {
  useEffect(() => {
    $(window).on("load", () => {
      $(".loading").fadeOut("slow");
    });
  });
  return (
    <div className="loading">
      <div className="logo">
        <h1>
          <span>V</span>ancity <span>J</span>un
        </h1>
      </div>
    </div>
  );
};

export default Loading;
