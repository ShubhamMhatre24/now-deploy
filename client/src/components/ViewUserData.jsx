



/*import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/signin_style.css"
import { IoMdArrowBack } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import About from "./About";
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
          <br />
          <div id="userprofile-header">
            <NavLink to="/" style={{color:"black",textDecoration:"none", display:"flex"}}>
            <IoMdArrowBack style={{fontSize:"25px"}} />
            <p>Back to home</p>
            </NavLink>
          </div>

          <br />

          <div>
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
                <NavLink  to="#"><button className="userprofile-logout">Log Out</button></NavLink>
                
              </div>

            </div>

            <div id="user-ads">
              <div id="profile-to-productads-section">
              <NavLink to="/"><div className="hover-line-effect" >
                <h3 style={{padding:"0 10px"}}  >Profile</h3>
                <br />
                <div className="line-hover"></div>
              </div></NavLink>
              <hr />
              
              <NavLink to="/Userads"><div className="hover-line-effect" onClick={() => navigatetouserads("/Userads", { state: { user: userData } })} >
                <h3 style={{padding:"0 10px"}}   >Posted Products</h3>
               <br />
                <div className="line-hover"></div>
              </div></NavLink>
          
              </div>
              <br />
              <hr />
              <br />
              <br />
              
              
              
            </div>

          </div>
        </div>
        <br /><br />
          
      </div>

      
      
    </div>
  );
}  */



  import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./styles/signin_style.css";
import { IoMdArrowBack } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
import Swal from "sweetalert2";
import { useState } from "react";
import Userprofile from "./Userprofile";
import Userads from "./Userads"; // your Posted Products component

export default function ViewUserData() {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state?.user || [];
  const [activeSection, setActiveSection] = useState("profile"); // track current section

  if (!userData || userData.length === 0) {
    return <h3>No user data found</h3>;
  }

  const user = userData[0];

  function handleDelete(itemId) {
    axios.delete(`http://localhost:8020/api/secondlife/deleteuserproduct/${itemId}`);
  }

  function handleEdit(item) {
    navigate("/edit", { state: { item } });
  }

  function handleLogout() {
    navigate("/Signin");
  }

  return (
    <div>
      <div id="userprofile">
        <br />
        <div id="userprofile-header">
          <NavLink
            to="/"
            style={{ color: "black", textDecoration: "none", display: "flex" }}
          >
            <IoMdArrowBack style={{ fontSize: "25px" }} />
            <p>Back to home</p>
          </NavLink>
        </div>

        <br />

        <div id="userprofile-info">
          <div style={{ width: "230px", display: "flex", justifyContent: "space-between" }}>
            <div>
              <VscAccount style={{ fontSize: "100px", color: "#d8d5d5ff" }} />
            </div>
            <div>
              <h2 style={{ color: "whitesmoke", fontFamily: "serif" }}>Welcome,</h2>
              <h2 style={{ color: "whitesmoke", fontFamily: "serif" }}>{user.username}</h2>
              <p>
                <CiLocationOn style={{ color: "whitesmoke" }} />
              </p>
            </div>
          </div>
          <div>
            <button onClick={handleLogout} className="userprofile-logout">
              Log Out
            </button>
          </div>
        </div>

        <div id="user-ads">
          <div id="profile-to-productads-section">
            
            <div
              className="hover-line-effect"
              onClick={() => setActiveSection("profile")}
              style={{ cursor: "pointer" }}
            >
              <h3 style={{ padding: "0 10px" }}>Profile</h3>
              <br />
              <div className="line-hover"></div>
            </div>
            <br />
            <hr />

            <div
              className="hover-line-effect"
              onClick={() => setActiveSection("products")}
              style={{ cursor: "pointer" }}
            >
              <h3 style={{ padding: "0 10px" }}>Posted Products</h3>
              <br />
              <div className="line-hover"></div>
            </div>
          </div>
          <br />
          <hr />
        </div>

        
        <div style={{ marginTop: "20px", padding: "10px" }}>
          {activeSection === "profile" && <Userprofile/>}
          {activeSection === "products" && <Userads user={userData} />}
        </div>
      </div>
    </div>
  );
}


