import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../Header'
// import Svg from '../Svg'
import Cookies from 'js-cookie'
import './index.css'

import VideoContainer from '../VideoContainer'
import AdComponent from '../AdComponent'

const Home = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const Name = Cookies.get('Name')
  const navigate = useNavigate()

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token');
      if (jwtToken === undefined) {
        return navigate('/login')
      }
      updateTime();
      getCurrentDate();
  })

  function getCurrentDate() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; 
    const year = now.getFullYear();
    setDate(`${day}/${month}/${year}`);
  }
  
  function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12; 
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amOrPm}`;
    setTime(currentTime)
  }
  
  
  setInterval(updateTime, 1000); 
  return (
    <div>
      <Header/>
      <div className='user-date-time-container'>
        <p className='home-heading'>Welcome, {Name}! Your security, our clear vision.</p>
        <div className='date-time-container'>
          <p className='date-text'>{date}</p>
          <p className='date-text'>{time}</p>
        </div>
      </div>
      <VideoContainer/>
      <AdComponent/>
      {/* <Svg/> */}
    </div>
  )
}

export default Home