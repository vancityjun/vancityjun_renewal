import React, { useEffect } from 'react'
import './ProgressBar.scss'
import { TimelineMax } from 'gsap'

const ProgressBar = () => {
  // useEffect(() => {
  //   const duration = 7
  //   var tl = new TimelineMax({ repeat: -1 })
  //   tl.fromTo('.progress', duration, { height: 0 }, { height: '100%' }, '0.5')
  // }, [])
  return (
    <div className="progressBar">
      <span className="progress"></span>
    </div>
  )
}

export default ProgressBar
