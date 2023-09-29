import React, { useState,useEffect } from 'react';
import './index.css';
import 'animate.css';

import LoginComponent from '../LoginComponent';
import SignUpComponent from '../SignUpComponent';

import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  
  const [isSignupClicked, setSignupClicked] = useState(false);

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token');
      if (jwtToken !== undefined) {
        return navigate('/')
      }
  })
  
  

  const signupbuttonClicked =(e)=>{
    e.preventDefault();
    setSignupClicked(!isSignupClicked)
  }

  return (
    <div className='login-background'>
      
      <div className='login-container'>
        <div className='form-container animate__animated animate__fadeInUp'>
          {isSignupClicked?(<SignUpComponent />):(<LoginComponent />)}
            
            <button className='signup-text'  onClick={signupbuttonClicked}>
                {isSignupClicked ? "Having account ? SignIn" : "Don't have account ? SignUp"}
            </button> 
          
        </div>
        {/* <div className='gif-container'>
          <img src="./cameragif.gif" alt="gif" className='login-gif' />
        </div> */}
      </div>
    </div>
  );
}

export default Login;
