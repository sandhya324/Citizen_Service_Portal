import React, { useState } from 'react'
import './Login.css'

const Login = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Login")

  return (
    
    <div className="login-popup">
        <form className="login-popup-container">
          
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <span onClick={()=>setShowLogin(false)} >✖</span>
          </div>

          <div className="login-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
          </div>

          <button>{currState==="Sign Up"?"Create an account":"Login"}</button>



          <div className="login-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          


          {currState==="Login"?
          <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>: 
          <p>Aready have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        

        </form>
    </div>
  )
}

export default Login
