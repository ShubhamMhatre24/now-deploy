/*import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Admincard from "./Admincard";
import "./styles/Adminlogin_style.css"
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";



export default function Adminview()
{    const [productList,setproductList]=useState([]);
     let getAllProducts = () => {
 
  return axios.get('http://localhost:8020/api/secondlife/productlist')
    .then((res) => {
      return res.data;
    })
    .then((finaldata)=>{
        setproductList(finaldata);
    })

}

useEffect(()=>{
        getAllProducts();
    },[])

    return(
        <>
            
                <div id="adminview-container">
                    
                        <div id="adminview-header">
                            <NavLink to="/" style={{color:"black",textDecoration:"none", display:"flex"}}>
                            <IoMdArrowBack style={{fontSize:"25px"}} />
                            <p>Back to home</p>
                            </NavLink>
                        </div>
                        <br />
                        
                        <div id="adminview-profile-header">
                                <div style={{width:"180px",display:"flex",padding:"",justifyContent:"space-between"}}>
                                    <div id="admin-logo"><MdManageAccounts style={{fontSize:"65px"}} /></div>
                                    <div style={{marginTop:"5px"}}>
                                        <h2>Admin</h2>
                                        <p style={{fontSize:"16px"}}>By SecondLife</p>
                                    </div>
                                </div>
                                <div>
                                    <NavLink><button className="userprofile-logout">Log Out</button></NavLink>
                                </div>
                        </div>
                        <br />
                        <div className="adminview-card"></div>    
                            <div  style={{padding:"0px 40px"}}>
                                <h2 style={{textAlign:"center"}}>Product posted by user</h2>
                                <br />
                                <div className="adminview-card-div">
                                    <Admincard className="adminview-card-style" data={productList} />
                                </div>
                            </div>
                           
                           
                        </div>
                    
                

            






             
                     
        </>
    );
}*/

import { useState, useEffect } from "react";
import axios from "axios";
import Admincard from "./Admincard";
import "./styles/Adminlogin_style.css";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";

export default function Adminview() {
  const [productList, setProductList] = useState([]);

  const getAllProducts = () => {
    axios
      .get("http://localhost:8020/api/secondlife/productlist")
      .then((res) => setProductList(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div id="adminview-container">
        <br />
      <div id="adminview-header">
        <NavLink to="/" style={{ color: "black", textDecoration: "none", display: "flex" }}>
          <IoMdArrowBack style={{ fontSize: "25px" }} />
          <p>Back to home</p>
        </NavLink>
      </div>

      <br />

      <div id="adminview-profile-header">
        <div style={{ width: "250px", display: "flex", justifyContent: "space-between" }}>
          <div id="admin-logo">
            <MdManageAccounts style={{ fontSize: "100px" }} />
          </div>
          <div style={{ marginTop: "5px",color:"white" }}>
            <h2>Welcome,</h2>
            <h2>Admin</h2>
            <p style={{ fontSize: "16px" }}>By SecondLife</p>
          </div>
        </div>
        <div>
          <NavLink to="/">
            <button className="userprofile-logout">Log Out</button>
          </NavLink>
        </div>
      </div>

      <br />

      <div style={{ padding: "0px 40px" }}>
        <div>
            <h2>Ads of Users</h2>
            <br />
            <hr />
        </div>
        <br />
        <div className="adminview-card-div">
          <Admincard className="adminview-card-style" data={productList} />
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
}
