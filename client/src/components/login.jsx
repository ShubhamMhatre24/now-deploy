// src/components/Login.jsx
/*import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

import "./styles/login_style.css"

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate=useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    //console.log('Username:', username)
    //console.log('Password:', password)
    // Add authentication logic here if needed

     try {
      const response = await axios.post('http://localhost:8020/api/secondlife/login', {
        username,
        password,
      })
         alert('Login Sucessfully !');
         navigate('/');

    }
    
 

    catch (error) {
      console.error('Login error:', error)
      setMessage('Login failed')
    }

  }

  return (
    <div>
      <br />
      <br />
      <div id="login-container">

        <div id="login-img"></div>

        <div id="login-form">
          <h1 style={{textAlign:"center"}}>Log In</h1>
          <form onSubmit={handleSubmit}>
            <div id="login-info-div">
            <div className='user-pass-div'>
              <label>Username* </label>
              <input
                type="text"
                className='user-pass-style'
                placeholder='Enter UserName...'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <br />
            <div className='user-pass-div'>
              <label>Password* </label>
              <input
                type="password"
                placeholder='Enter Password..'
                className='user-pass-style'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <br />
            <button className='login-btn'  type="submit">Login</button>
            </div>
          </form>

          <div id="forget-div" >
                            <div style={{width:"300px",height:"25px",display:"flex" , justifyContent:"center"}}>
                                    <pre><b>-------- </b></pre>
                                    <p> Is Forget? </p>
                                    <pre><b> --------</b></pre>
                            </div>
                            <br />
                            <div id="forget-btn">
                                <button id="forget-username">Forget Username?</button>
                                <button id="forget-password">Forget Password?</button>
                            </div>
                                
                    </div>
                    <br />
                    <div style={{marginLeft:"145px",display:"flex"}}>
                        <pre style={{fontSize:"18px",}}>New to this site? </pre>
                        <pre id="register" ><b>Register Here</b></pre>
                    </div>


        </div>

        <div id="cancel-btn"><NavLink style={{textDecoration:"none"}} to="/"><p>X</p></NavLink></div>

      </div>
    </div>
  )
}

export default Login*/





// src/components/Login.jsx
import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import "./styles/login_style.css"

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:8020/api/secondlife/login', {
        username,
        password,
      })

      // Save user info (you can save token also if backend sends it)
      localStorage.setItem("user", JSON.stringify(response.data.user || { username }))

      alert('Login Successfully!')
      navigate('/')
    } catch (error) {
      console.error('Login error:', error)
      setMessage('Login failed, please check your credentials')
    }
  }

  return (
    <div>
      <br /><br />
      <div id="login-container">
        <div id="login-img"></div>

        <div id="login-form">
          <h1 style={{textAlign:"center"}}>Log In</h1>
          <form onSubmit={handleSubmit}>
            <div id="login-info-div">
              <div className='user-pass-div'>
                <label>Username* </label>
                <input
                  type="text"
                  className='user-pass-style'
                  placeholder='Enter password....'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <br />
              <div className='user-pass-div'>
                <label>Password* </label>
                <input
                  type="password"
                  placeholder='Enter Username..'
                  className='user-pass-style'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <br /><br />
              <button className='login-btn' type="submit">Login</button>
            </div>
          </form>
          {message && <p style={{color:"red", textAlign:"center"}}>{message}</p>}

          <div id="forget-div">
            <div style={{width:"300px",height:"25px",display:"flex" , justifyContent:"center"}}>
              <pre><b>-------- </b></pre>
              <p> Is Forget? </p>
              <pre><b> --------</b></pre>
            </div>
            <br />
            <div id="forget-btn">
              <button id="forget-username">Forget Username?</button>
              <button id="forget-password">Forget Password?</button>
            </div>
          </div>
          <br />
          <div style={{marginLeft:"145px",display:"flex"}}>
            <pre style={{fontSize:"18px"}}>New to this site? </pre>
            <pre id="register"><b>Register Here</b></pre>
          </div>
        </div>

        <div id="cancel-btn"><NavLink  style={{textDecoration:"none"}} to="/"><p>X</p></NavLink></div>
      </div>
    </div>
  )
}

export default Login 




