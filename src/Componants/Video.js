import React from 'react'
import "../MyCss/Video.css"
import videoBg from "../Componants/Assets/Bgvideo.mp4"

const Video = () => {
  return (
    <div className='dd'>
        <video className='bb'  autoPlay loop muted controls>
<source src={videoBg}  autoplay
 type='video/mp4'></source>
        </video>
    </div>
  )
}

export default Video