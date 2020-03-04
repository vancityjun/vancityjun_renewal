import React, { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import HtmlParser from 'react-html-parser'

const ProjectContent = ({ pc, mobile, customContent }) => {
  const [mobileMode, setMobileMode] = useState(false)
  const pcScreen = pc.map((pc, i) => {
    return <img src={require('../img/' + pc)} alt="" key={i}></img>
  })
  const mobileScreen = mobile.map((mobile, i) => {
    return <img src={require('../img/' + mobile)} alt="" key={i}></img>
  })
  useEffect(() => {
    mobile.length && !pc.length ? setMobileMode(true) : setMobileMode(false)
  }, [])
  const Device = () =>
    pc.length && mobile.length ? (
      <div className="device">
        <a onClick={e => [e.preventDefault, setMobileMode(false)]}>PC</a>
        <a onClick={e => [e.preventDefault, setMobileMode(true)]}>Mobile</a>
      </div>
    ) : null
  const Content = () => {
    switch (mobileMode) {
      case false:
        return [ReactHtmlParser(customContent), pcScreen]
        break
      case true:
        return mobileScreen
        break
    }
  }
  return (
    <div className="project-content cf">
      {Device()}
      <div className={`conWrap ${mobileMode ? 'mobile' : 'desktop'}`}>
        {Content()}
      </div>
    </div>
  )
}

export default ProjectContent
