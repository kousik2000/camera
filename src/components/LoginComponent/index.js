import React,{useState} from 'react'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import './index.css'

const LoginComponent = () => {
    const navigate = useNavigate()

    

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    const [errorMsg , setErrorMsg] = useState("")

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      }
      
      

    // const onSubmitSuccess = (jwtToken) => {
    //     const {history} = this.props
    //     Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    //     history.replace('/')
    // }
    
    const onSubmitFailure = errorMsg => {
        setErrorMsg(errorMsg)
    }    
      
    const loginFormSubmit =async(e)=>{
        e.preventDefault();
        const Email = email;
        const Password = password;
        const userDetails = {Email,Password}
        console.log(userDetails)
        const url = 'http://localhost:9000/login'

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userDetails),
        }

        const response = await fetch(url, options)
        const data = await response.json()

        // console.log(data.error_msg,"frontend");

        if (response.ok === true) {
            navigate('/');
            Cookies.set('jwt_token', data.jwtToken, { expires: 30, path: '/' });
            Cookies.set('Name', data.Name, { expires: 30, path: '/' });
            Cookies.set('PrimaryMember', data.primaryMember, { expires: 30, path: '/' });
            setShowErrorMsg(false)
        } else {
            onSubmitFailure(data.error_msg)
            setShowErrorMsg(true)
        }
    }

    const onEmailChnage =(e)=>{
        setEmail(e.target.value);
    }

    const onPasswordChange =(e)=>{
        setPassword(e.target.value);
    }

  return (
    <form className='form' onSubmit={loginFormSubmit}>
            <h1 className='form-head'>SignIn</h1>
            <p className='form-label' htmlFor='email'>Email</p>
            <input type="email" className='form-input' placeholder='Enter your Email' id="email" required onChange={onEmailChnage}/><br />

            <p className='form-label' htmlFor='password'>Password</p>
            <input
              type={passwordVisible ? 'text' : 'password'}
              className='form-input'
              placeholder='Enter your Password'
              id="password" required
              onChange={onPasswordChange}
            /><br />

            <div className="checkbox-container">

            <input
              type="checkbox"
              className='checkbox'
              onClick={togglePasswordVisibility}
            />Show Password
            </div>
            <button type='submit' className='form-button'>Login</button>
            {showErrorMsg && <p className='error-message'>{errorMsg}</p>}
            
          </form>
  )
}

export default LoginComponent