import React, { Component } from "react";

function Slide(props) {
  const background = {
    background: "url(" + require("../img/" + props.background) + ")"
  };
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
          <div className="device">
            <a href="#" className="btnDesktop active">
              <i className="fas fa-desktop"></i>
              <span>PC</span>
            </a>
            <a href="#" className="btnMobile">
              <i className="fas fa-mobile-alt"></i>
              <span>Mobile</span>
            </a>
          </div>
          <div className="desktop conWrap">
            {/* <img src="img/furence1600all.png" alt=""> */}
          </div>
          <div className="mobile conWrap" style={{ display: "none" }}>
            {/* <img src="img/furence-mobile-1.png" alt="">
        <img src="img/furence-mobile-2.png" alt="">
        <img src="img/furence-mobile-3.png" alt="">
        <img src="img/furence-mobile-4.png" alt="">
        <img src="img/furence-mobile-5.png" alt="">
        <img src="img/furence-mobile-6.png" alt=""> */}
          </div>
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
