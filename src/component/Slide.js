import React, { useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import ScrollTop from '../component/ScrollTop'

const Slide = ({
  pc,
  mobile,
  customContent,
  id,
  url,
  title,
  shortDescription,
  date,
  category,
  background
}) => {
  const backgroundStyle = {
    background: 'url(' + require('../img/' + background) + ')',
    backgroundSize: 'cover',
    backgroundPosition: '50%'
  }
  const pcScreen = pc.map((pc, i) => {
    return <img src={require('../img/' + pc)} alt="" key={i}></img>
  })
  const mobileScreen = mobile.map((mobile, i) => {
    return <img src={require('../img/' + mobile)} alt="" key={i}></img>
  })
  const ScrollDown = () => {
    if (pc.length || mobile.length || customContent) {
      return (
        <a href className="scrollDown" style={{ display: 'none' }}>
          <span></span>
        </a>
      )
    }
  }
  return (
    <div
      className={'blog-slider__item swiper-slide project' + id}
      data-hash={'slide' + id}
    >
      <div className="blog-slider__img">
        <section className="project-header" style={backgroundStyle}>
          <div className="info-background"></div>
          <div className="project-info">
            <h2 className="project-info_title">{title}</h2>
            <p className="project-info_detail">{shortDescription}</p>
          </div>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="view-website"
            >
              View website
            </a>
          ) : null}
          {ScrollDown()}
        </section>
        <div className="project-content cf">
          {pc.length && mobile.length ? (
            <div className="device">
              <a href className="btnDesktop active">
                <span>PC</span>
              </a>
              <a href className="btnMobile">
                <span>Mobile</span>
              </a>
            </div>
          ) : null}
          {pc.length || customContent ? (
            <div className="desktop conWrap">
              {ReactHtmlParser(customContent)}
              {pcScreen}
            </div>
          ) : null}
          <div className="mobile conWrap" style={{ display: 'none' }}>
            {mobileScreen}
          </div>
          {/* <ScrollTop /> */}
        </div>
      </div>
      <div className="content_wrapper works">
        <div className="blog-slider__content cf">
          <span className="blog-slider__code">{date}</span>
          <div className="blog-slider__title">{title}</div>
          <div className="blog-slider__text">{category}</div>
          <p className="blog-slider__button">
            <a href="# ">See more</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Slide
