import React from 'react';
import './index.css';

import Video from '../Video'

const videoData = [
    {
        id: "camera_1",
        url: "https://www.youtube.com/live/4yLuA3bPkp4?si=g6bjXHl8B5rgZHwV",
    },
    {
        id: "camera_2",
        url: "https://www.youtube.com/live/cgxS2nQzVW0?si=smlYlbQMmm9o427U",
    },
    {
        id: "camera_3",
        url: "https://www.youtube.com/live/4qyZLflp-sI?si=57POjn1ScIiyO_Ie",
    },
    {
        id: "camera_4",
        url: "https://www.youtube.com/live/MVHWUMu8Xs8?si=PmDoQBMThIuBU2wM",
    },
    {
        id: "camera_5",
        url: "https://www.youtube.com/live/1-iS7LArMPA?si=IIBTHmtvY35XG33w",
    },
];

const VideoContainer = () => {
    const isVideoClicked=(id)=>{
        alert(id)
    }
    return (
        <div className='video-container'>
            {videoData.map(eachItem => (
                <Video url={eachItem.url} id={eachItem.id} key={eachItem.id} isVideoClicked={isVideoClicked}/>
            ))}
        </div>
    );
};

export default VideoContainer;
