import React, { useEffect } from "react";
import $ from "jquery";
import "./loading.scss";

const Loading = () => {
  useEffect(() => {
    $(window).on("load", () => {
      $(".loading").fadeOut("slow");
    });
  });
  return <div className="loading"></div>;
};

export default Loading;
