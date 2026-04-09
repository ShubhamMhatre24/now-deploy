/*import axios from "axios";
import { useState } from "react";
import ViewUserData from "./ViewUserData";
import { NavLink,useNavigate } from 'react-router-dom'
import "./styles/signin_style.css"

export default function Signin()
{   const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [userData,setUserData]=useState([]);
    const [isSignedIn,setIsSignedIn]=useState(false);
    const navigate = useNavigate()
    const getUserData=(e)=>{
      alert("Click on view profile to view your profile!")
      e.preventDefault()
      
      return axios.get(`http://localhost:8020/api/secondlife/signin/${username}`)
      .then((res)=>{
        
       return(res.data)})
      .then((finalData)=>{
          if(finalData&&finalData.length>0){
              setUserData(finalData);
          setIsSignedIn(true); // 👈 mark as signed in
         console.log(userData);
          }
          
                 });
    }

     const handleViewProfile = () => {
    // you can either navigate to another page or show user data
    navigate("/viewprofile", { state: { user: userData } });
  };

    return(
        <div>

        <div id="user-viewprofile-container">
            <div id="viewprofile-login">
              <div style={{width:"480px"}}>
                <h1 style={{textAlign:"center"}}>Sign In</h1>
                <br />
                <hr />
                <br />
                <div style={{marginLeft:"100px"}}>
                  <form >
                        <div>
                          <label>Username </label>
                          <br />
                          <input
                            type="text"
                            className="viewprofile-login-input-style"
                            placeholder="Enter Username..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </div>
                        <br />
                        <div>
                          <label>Password: </label>
                          <br />
                          <input
                            type="password"
                            className="viewprofile-login-input-style"
                            placeholder="Enter Password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <br />
                        <button id="admin-login-btn" onClick={getUserData}>Sign in</button>
                    </form>
                    <br />
                    {isSignedIn && (
        <button id="viewprofile-btn" onClick={handleViewProfile}>View Profile</button>
        
      )}
                </div>
              </div>
              <div className="admin-login-cancel-btn">
                    <NavLink style={{color:"black",textDecoration:"none"}} to="/"><div className="admin-login-cancel-btn">X</div></NavLink>
                </div>

            </div>
            

        </div>
    </div>
    )
}
    */


import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import "./styles/signin_style.css";

export default function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState([]);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const navigate = useNavigate();

    const getUserData = (e) => {
        e.preventDefault();
        alert("Click on 'View Profile' to view your profile!");
        axios.get(`http://localhost:8020/api/secondlife/signin/${username}`)
            .then(res => res.data)
            .then(finalData => {
                if (finalData && finalData.length > 0) {
                    setUserData(finalData);
                    setIsSignedIn(true);
                    console.log(finalData);
                } else {
                    alert("User not found!");
                }
            })
            .catch(err => console.error(err));
    };

    const handleViewProfile = () => {
        navigate("/viewprofile", { state: { user: userData } });
    };

    return (
        <div id="user-viewprofile-container">
            <div id="viewprofile-login">
                <div style={{ width: "480px" }}>
                    <h1 style={{ textAlign: "center" }}>Sign In</h1>
                    <br />
                    <hr />
                    <br />
                    <div style={{ marginLeft: "100px" }}>
                        <form>
                            <div>
                                <label>Username </label>
                                <br />
                                <input
                                    type="text"
                                    className="viewprofile-login-input-style"
                                    placeholder="Enter Username..."
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <br />
                            <div>
                                <label>Password </label>
                                <br />
                                <input
                                    type="password"
                                    className="viewprofile-login-input-style"
                                    placeholder="Enter Password..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <br />
                            <button id="admin-login-btn" onClick={getUserData}>Sign in</button>
                        </form>
                        <br />
                        {isSignedIn && (
                            <button id="viewprofile-btn" onClick={handleViewProfile}>
                                View Profile
                            </button>
                        )}
                    </div>
                </div>

                <div className="admin-login-cancel-btn">
                    <NavLink style={{ color: "black", textDecoration: "none" }} to="/">
                        <div className="admin-login-cancel-btn">X</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

