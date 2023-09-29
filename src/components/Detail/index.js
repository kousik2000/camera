import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Header from '../Header'
import './index.css'

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

const Detail = (props) => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id)
    console.log(videoData)
  },[id])

  return (
    <div>
      <Header/>
      <div className='detailed-video-container'>

      </div>
    </div>
  )
}

export default Detail