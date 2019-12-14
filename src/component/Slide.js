import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import ScrollTop from "../component/ScrollTop";

function Slide(props) {
  const background = {
    background: "url(" + require("../img/" + props.background) + ")",
    backgroundSize: "cover",
    backgroundPosition: "50%"
  };
  const pc = props.pc.map(pc => {
    return <img src={require("../img/" + pc)} alt=""></img>;
  });
  const mobile = props.mobile.map(mobile => {
    return <img src={require("../img/" + mobile)} alt=""></img>;
  });
  // let content;
  // if (props.mobile.length !== 0 && props.pc.length !== 0) {
  //   content = (
  //     <div className="device">
  //       <a href="#" className="btnDesktop active">
  //         <i className="fas fa-desktop"></i>
  //         <span>PC</span>
  //       </a>
  //       <a href="#" className="btnMobile">
  //         <i className="fas fa-mobile-alt"></i>
  //         <span>Mobile</span>
  //       </a>
  //     </div>
  //   );
  // }
  const size = "3x";
  return (
    <div
      className={"blog-slider__item swiper-slide project" + props.id}
      data-hash={"slide" + props.id}
    >
      <div className="blog-slider__img">
        <section
          className="project-header"
          data-midnight="default"
          style={background}
        >
          <div className="info-background"></div>
          <div className="project-info">
            <h2 className="project-info_title">{props.title}</h2>
            <p className="project-info_detail">{props.description}</p>
            <a href={props.url} target="_blank" className="view-website">
              View website
            </a>
          </div>
          <a href="#" className="scrollDown" style={{ display: "none" }}>
            <span></span>
          </a>
        </section>
        <div className="project-content cf" data-midnight="bright">
          {ReactHtmlParser(props.customContent)}
          {props.pc.length !== 0 ? (
            <>
              <div className="device">
                <a href="#" className="btnDesktop active">
                  <i className="fas fa-desktop"></i>
                  <FontAwesomeIcon
                    icon={faDesktop}
                    size={size}
                    style={{ margin: "0 auto" }}
                  />
                  <span>PC</span>
                </a>
                {props.mobile.length !== 0 ? (
                  <a href="#" className="btnMobile">
                    <i className="fas fa-mobile-alt"></i>
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      size={size}
                      style={{ margin: "0 auto" }}
                    />
                    <span>Mobile</span>
                  </a>
                ) : null}
              </div>
              <div className="desktop conWrap">{pc}</div>
              <div className="mobile conWrap" style={{ display: "none" }}>
                {mobile}
              </div>
              <ScrollTop />
            </>
          ) : null}
          {/* <div className="desktop conWrap">{pc}</div>
          <div className="mobile conWrap" style={{ display: "none" }}>
            {mobile}
          </div> */}
        </div>
      </div>
      <div className="content_wrapper works">
        <div className="blog-slider__content cf">
          <span className="blog-slider__code">{props.date}</span>
          <div className="blog-slider__title">{props.title}</div>
          <div className="blog-slider__text">{props.category}</div>
          <p className="blog-slider__button">
            <a href="javascript:void(0);" target="_blank">
              See more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
