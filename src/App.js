import React,{useState,useEffect} from 'react'

import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Gallery from './components/Gallery'
import Detail from './components/Detail'
import Recorded from './components/Recorded'
import NotFound from './components/NotFound'

import { BrowserRouter as Router, Route, Routes ,Navigate } from "react-router-dom";

import Cookies from 'js-cookie'

const App = () => {
  const [isProtected,setIsProtected] = useState(true) 
  const token= Cookies.get('jwt_token')

  useEffect(() => {
      if (token===undefined){
        setIsProtected(false)
      }else{
        setIsProtected(true)
      }
  },[isProtected,token])

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          {/* {isProtected ? 
          (<Route exact path="/" element={<Home />} />):<Route exact path="/login" element={<Login />} />} */}
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/recorded" element={<Recorded />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App