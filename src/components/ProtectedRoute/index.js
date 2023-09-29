import React from 'react'
import {Route,useNavigate} from 'react-router-dom'
import Home from '../Home'
import Cookies from 'js-cookie'

const ProtectedRoute = () => {
    const navigate = useNavigate()
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
        navigate('/login')
    }
  return <Route exact path="/" element={<Home />} />;

}

export default ProtectedRoute