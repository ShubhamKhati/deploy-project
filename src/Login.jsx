import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='containerr'>
      <Link to="/" className='image'>

      <img className='amazon__logo' src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png" alt="amazon-logo" />

      </Link>
       
        <div className='login-container'>
          <h1>Sign-in</h1>
          <form action="">
             <h5>E-mail</h5>
             <input type="email" />
             <h5>Password</h5>
             <input type="password" />
             <br />
             <button type='submit' className='sign-in-button'>Sign-in</button>
             <p>By signing-in you agree to Amazon's conditions of Use & Sale. Please see our Privacy Notice and our interest-Based Ads Notice.</p>
             <button>Create your Amazon Account</button>

          </form>
        </div>
    </div>
  )
}

export default Login