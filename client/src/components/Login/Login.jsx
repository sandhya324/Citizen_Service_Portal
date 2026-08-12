import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import './Login.css'

const Login = ({setShowLogin}) => {

  const navigate = useNavigate();
  const [currState, setCurrState] = useState("Register");

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // const handleSubmit = async (e) => {
  // e.preventDefault();

  // if (currState === "Register") {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:5000/api/users/register",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify(formData)
  //       }
  //     );

  //     const data = await response.json();

  //     if (response.ok) {
  //       alert(data.message);
  //       setCurrState("Login");
  //     } else {
  //       alert(data.message);
  //     }

  //   } catch (error) {
  //     console.error(error);
  //     alert("Something went wrong");
  //   }
  //  }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (currState === "Register") {

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setCurrState("Login");
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

  } else {

    // LOGIN
    try {
      const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        setShowLogin(false);

        navigate("/dashboard");

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  }
};


  return (
    
    <div className="login-popup">
      
        <form 
            className="login-popup-container"
            onSubmit={handleSubmit}
        >
          
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <span onClick={()=>setShowLogin(false)} >✖</span>
          </div>




          <div className="login-inputs">

           {currState === "Register" && (
            <>
             <input
               type="text"
               name="full_name" 
               placeholder="Your Full Name"  
               value={formData.full_name} 
               onChange={handleChange}
               required 
             />
             
             <input
               type="text"
               name="mobile"
               placeholder="Your mobile number"
               value={formData.mobile}
               onChange={handleChange}
               required
             />
            </>
           )}

           <input
             type="email"
             name="email"
             placeholder="Your email"
             value={formData.email}
             onChange={handleChange}
             required
           />

           <input
             type="password"
             name="password"
             placeholder="Password"
             value={formData.password}
             onChange={handleChange}
             required
           />

          </div>
      

          <button>{currState==="Register"?"Create an account":"Login"}</button>



          <div className="login-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          


          {currState==="Login"?
          <p>Create a new account? <span onClick={()=>setCurrState("Register")}>Click here</span></p>: 
          <p>Aready have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        

        </form>
    </div>
  )
}

export default Login
