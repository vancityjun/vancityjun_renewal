import React, { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { TimelineLite } from 'gsap'
import $ from 'jquery'

const ProjectContent = ({ pc, mobile, customContent }) => {
  const onlyMobile = mobile.length && !pc.length ? true : false
  const pcScreen = pc.map((pc, i) => {
    return <img src={require('../img/' + pc)} alt="" key={i}></img>
  })
  const mobileScreen = mobile.map((mobile, i) => {
    return <img src={require('../img/' + mobile)} alt="" key={i}></img>
  })

  const getSiblings = elem => {
    var siblings = []
    var sibling = elem.parentNode.firstChild

    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling)
      }
      sibling = sibling.nextSibling
    }

    return siblings
  }
  const tl = new TimelineLite({ paused: false })
  const onClick = (e, current, previous) => {
    e.preventDefault()
    const childPrevious = e.target
      .closest('.project-content')
      .querySelector(previous)
    const childCurrent = e.target
      .closest('.project-content')
      .querySelector(current)

    tl.fromTo(
      childPrevious,
      0.5,
      { display: 'flex', opacity: 1 },
      { opacity: 0, display: 'none' },
      'start'
    ).fromTo(childCurrent, 0.5, { opacity: 0 }, { opacity: 1, display: 'flex' })
  }

  const Device = () =>
    pc.length && mobile.length ? (
      <div className="device">
        <a onClick={e => onClick(e, '.desktop', '.mobile')}>PC</a>
        <a onClick={e => onClick(e, '.mobile', '.desktop')}>Mobile</a>
      </div>
    ) : null

  return (
    <div className="project-content cf">
      {Device()}
      <div
        className={`conWrap desktop`}
        style={{ display: onlyMobile ? 'none' : 'flex' }}
      >
        {ReactHtmlParser(customContent)}
        {pcScreen}
      </div>
      <div
        className={`conWrap mobile`}
        style={{ display: onlyMobile ? 'flex' : 'none' }}
      >
        {mobileScreen}
      </div>
    </div>
  )
}

export default ProjectContent
