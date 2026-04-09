import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles/Adminlogin_style.css"
export default function Adminlogin()
{   const [password,setPassword]=useState("");
    const navigate=useNavigate();
    function handlelogin()
    {
        if(password==="1016")
        {
            alert("Login Sucessfully");
            navigate("/Adminview");
        }
        else
        {
            alert("Enter Valid Password !");
        }
    }
    return(
    <div>
        
        <div style={{display:"grid",placeItems:"center",height:"100vh",width:"100%"}}>
            <div id="admin-login-container">

                <div style={{width:"320px"}}>
                    <h1 style={{textAlign:"center"}}>Admin Login</h1>
                    <br />
                    <hr />
                    <br />
                    <div style={{marginLeft:"60px"}}>
                        <label htmlFor="password">Enter Password</label>
                        <br />
                        
                        <input id="password" className="admin-login-password" type="password" placeholder="Enter Password..." value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        <br /> <br />
                        <button id="admin-login-btn" onClick={handlelogin}>Login</button>
                    </div>
                </div>

                <div className="admin-login-cancel-btn">
                    <NavLink style={{color:"black",textDecoration:"none"}} to="/"><div className="admin-login-cancel-btn">X</div></NavLink>
                </div>
            </div>
        </div>
        





       {/*} <h1>Admin Login</h1>
        <label htmlFor="password">Enter Password</label>
         <input id="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
         <br />
         <button onClick={handlelogin}>login</button>*/}
    </div>
   
);
    
}