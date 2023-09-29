import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

import ReactPlayer from 'react-player'



const Video = (props) => {
    const {url,id,isVideoClicked} = props

    const VideoClicked=()=>{
      isVideoClicked(id)
    }
      
  return (
    <Link className='video-button' onClick={VideoClicked} to={`/detail/${id}`}>
    <div className='single-video-container'>
        <ReactPlayer url={url}  className="video" width="1fr" height="240px" playing={true} controls={false} muted={true}/>
        <figcaption> 
          <p>Click Me</p> 
        </figcaption> 
        {/* <div className="hover-text">Click Me</div> */}
    </div>
    </Link>
  )
}

export default Video