import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/signin_style.css"
import { IoMdArrowBack } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function ViewUserData() {
   const navigatetouserads = useNavigate();
  const location = useLocation();
  const userData = location.state?.user || [];  // data passed from Signin
  const navigate=useNavigate();
  const [open,setOpen]=useState(false);
  if (!userData || userData.length === 0) {
    return <h3>No user data found</h3>;
  }

  const user = userData[0]; // since it's always an array with 1 user
  function handleDelete(itemId)
  { axios.delete(`http://localhost:8020/api/secondlife/deleteuserproduct/${itemId}`)
    
  }

  function handleEdit(item)
  {
    navigate('/edit',{state:{item}});
  }

  function handleLogout()
  {
   navigate('/')
   //console.log("hello")
  }
  return (
    <div>

      <div >
        
        <div id="userprofile" >
          {/*
          <div id="userprofile-header">
            <NavLink to="/" style={{color:"black",textDecoration:"none", display:"flex"}}>
            <IoMdArrowBack style={{fontSize:"25px"}} />
            <p>Back to home</p>
            </NavLink>
          </div> */}

          
            
          <div style={{padding:"0 76px"}}>
            {/*}
            <div id="userprofile-info">
              <div style={{ width:"230px",display:"flex",justifyContent:"space-between"}}>
                <div><VscAccount style={{fontSize:"100px",color:"#d8d5d5ff"}} /></div>
                <div >
                  <h2 style={{color:"whitesmoke",fontFamily:"serif"}}>Welcome,</h2>
                  <h2 style={{color:"whitesmoke",fontFamily:"serif"}}>{user.username}</h2>
                  <p><CiLocationOn style={{color:"whitesmoke"}} /></p>
                </div>
              </div>
              <div>
                <NavLink  to="/Signin"><button className="userprofile-logout">Log Out</button></NavLink>
                
              </div>

            </div>*/}

            
              {/*<div id="profile-to-productads-section">
              <div className="hover-line-effect">
                <h3 style={{padding:"0 10px"}} >Profile</h3>
                <br />
                <div className="line-hover"></div>
              </div>
              <hr />
              
              <div className="hover-line-effect">
                <h3 style={{padding:"0 10px"}} onClick={() => navigatetouserads("/Userads")} >Posted Products</h3>
               <br />
                <div className="line-hover"></div>
              </div>
          
              </div> */}
              
              <div >
                
                {user.userDetails && user.userDetails.length > 0 ? (
                <div style={{ width:"auto",height:"auto",display:"grid",gridTemplateColumns:"442px 442px 442px" ,gridGap:"20px"}} >
                  
                  {user.userDetails.map((item, index) => (
                    <div id="user-post-ad-cart"  className="user-ads-style" key={index}>
                      
                      <div>
                          <h4>ID: {item._id}</h4>
                        
                        <img  src={`http://localhost:8020${item.image}`} 
                          alt="product" 
                          width="350"   />
                        <br />
                        <p> Brand: {item.brandName}</p>
                        
                        <p>Price:  {item.price}</p>
                        
                        <p><b>Remark By Admin: {item.adminRemark}</b></p>
                        <br />
                        <div style={{width:"130px",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                          <button style={{width:"60px",height:"30px",backgroundColor:"#428bca" , color:"white"}} onClick={()=>{handleDelete(item._id)}}>Delete</button>
                          <button style={{width:"60px",height:"30px",backgroundColor:"#5cb85c" , color:"white"}} onClick={()=>{handleEdit(item)}}>Edit</button>
                        </div>
                      </div>
                      <br />
                      
                    </div>
                  
                  ))}
                  
                </div>
                  ) : (
                  <p>No products found</p>
                  )}
              </div>
              
            

          </div>
        </div>
        <br /><br />
          
      </div>

      
      
    </div>
  );
}