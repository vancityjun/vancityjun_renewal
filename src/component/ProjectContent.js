import React, { useState, useEffect } from 'react'
// -has both pc and mobile, -has only pc including custom content, -has only mobile, -dosen't have any,
// if mobile.length && !pc.length ? mobile : true,
const ProjectContent = () => {
  const [mobileMode, setMobileMode] = useState(false)
  useEffect(() => {
    mobile.length && !pc.length ? setMobileMode(true) : setMobileMode(false)
  }, [])
  return (
    <div className="project-content cf">
      <div className="device">
        <a onClick={() => setMobileMode(false)}>PC</a>
        <a onClick={() => setMobileMode(true)}>mobile</a>
      </div>
      <div className="conWrap">
        {ReactHtmlParser(customContent)}
        {pcScreen}
        {mobileScreen}
      </div>
    </div>
  )
}

export default ProjectContent
