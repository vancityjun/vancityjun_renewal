import React from "react";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import ScrollTop from "../component/ScrollTop";

const Slide = props => {
  const background = {
    background: "url(" + require("../img/" + props.background) + ")",
    backgroundSize: "cover",
    backgroundPosition: "50%"
  };
  const pc = props.pc.map((pc, i) => {
    return <img src={require("../img/" + pc)} alt="" key={i}></img>;
  });
  const mobile = props.mobile.map((mobile, i) => {
    return <img src={require("../img/" + mobile)} alt="" key={i}></img>;
  });
  const ScrollDown = () => {
    if (props.pc.length || props.mobile.length || props.customContent) {
      return (
        <a href="# " className="scrollDown" style={{ display: "none" }}>
          <span></span>
        </a>
      );
    }
  };
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
            {props.url ? (
              <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                className="view-website"
              >
                View website
              </a>
            ) : null}
          </div>
          {ScrollDown()}
        </section>
        <div className="project-content cf" data-midnight="bright">
          {props.pc.length && props.mobile.length ? (
            <div className="device">
              <a href="# " className="btnDesktop active">
                <i className="fas fa-desktop"></i>
                <FontAwesomeIcon
                  icon={faDesktop}
                  size={size}
                  style={{ margin: "0 auto" }}
                />
                <span>PC</span>
              </a>
              <a href="# " className="btnMobile">
                <i className="fas fa-mobile-alt"></i>
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  size={size}
                  style={{ margin: "0 auto" }}
                />
                <span>Mobile</span>
              </a>
            </div>
          ) : null}
          {props.pc.length || props.customContent ? (
            <div className="desktop conWrap">
              {ReactHtmlParser(props.customContent)}
              {pc}
            </div>
          ) : null}
          <div className="mobile conWrap cf" style={{ display: "none" }}>
            {mobile}
          </div>
          <ScrollTop />
        </div>
      </div>
      <div className="content_wrapper works">
        <div className="blog-slider__content cf">
          <span className="blog-slider__code">{props.date}</span>
          <div className="blog-slider__title">{props.title}</div>
          <div className="blog-slider__text">{props.category}</div>
          <p className="blog-slider__button">
            <a href="# ">See more</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
