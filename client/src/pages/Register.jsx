import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import backendClient from '../utils/backendClient'


const Register = () => {
  const [inputs,setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const handleChange = e =>{
setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }
  console.log(inputs)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await backendClient.post("/auth/register", inputs)
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
        <input required type="email" placeholder='email ' name='email' onChange={handleChange}/>
        <input  required type="password" placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        <p>this is an error! </p>
        <span> Dont you have an account? 
          <Link to="/login">Login</Link> 
          </span>
      </form>
    </div>
  )
}

export default Register