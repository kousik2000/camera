import React,{useState} from 'react'
import './index.css'

const SignUpContainer = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      }
  return (
    <form className='form'>
            <h1 className='form-head'>SignUp</h1>
            <p className='form-label' htmlFor='email'>Email</p>
            <input type="email" className='form-input' placeholder='Enter your Email' id="email" required /><br />

            <p className='form-label' htmlFor='password'>Password</p>
            <input
              type={passwordVisible ? 'text' : 'password'}
              className='form-input'
              placeholder='Enter your Password'
              id="password" required
            /><br />

            <div className="checkbox-container">

            <input
              type="checkbox"
              className='checkbox'
              onClick={togglePasswordVisibility}
            />Show Password
            </div>

            <div className='name-code-container'>
                <div>
                <p className='form-label' htmlFor='name'>Name</p>
                <input type="text" className='name-input' placeholder='Name' id="name"/>
                </div>

                <div>
                <p className='form-label' htmlFor='name'>Code</p>
                <input type="text" className='code-input' placeholder='####' id="name"/>
                </div>
            </div>


            <button type='submit' className='form-button'>SignUp</button>
          </form>
  )
}

export default SignUpContainer