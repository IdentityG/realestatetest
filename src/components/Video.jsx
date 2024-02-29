import React from 'react'

const Video = () => {
  return (
    <div id="responsiveVideoWrapper" className="relative h-0 pb-fluid-video">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/zihoyz0u_cs"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  )
}

export default Video