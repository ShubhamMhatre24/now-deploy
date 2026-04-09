

/*import { use, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function AdminCheck() {
    const location = useLocation();
    const { item } = location.state || {};
    const navigate=useNavigate();
    const [aremark,setaRemark]=useState('');
    if (!item) return <p>No product data.</p>;


    const handleSubmit=async(e)=>{
         e.preventDefault();
        await axios.post(`http://localhost:8020/api/secondlife/adminremark/${item._id}`, {aremark})
    }

    return (
        <> 
        <h1>Admin Window</h1>
          {
            item.image && ( <img
              src={`http://localhost:8020${item.image}`}
              alt="Product"
              className="card-image"
            />)
          }
            <h1>Product Details</h1>
            <h2>ID: {item._id}</h2>
            <h2>Brand: {item.brandName}</h2>
            <h2>Price: {item.price}</h2>
            <h2><a href={item.location}>View Location</a></h2>
            <form onSubmit={handleSubmit} >
            <h2>Add Remark</h2>
            <input type="text" value={aremark} onChange={(e)=>{setaRemark(e.target.value)}} />
            <button type='submit'>Add </button>
            </form>
        </>
    );
}*/




import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./styles/Adminlogin_style.css" 
import { NavLink } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";




export default function AdminCheck() {
  const location = useLocation();
  const { item } = location.state || {};
  const navigate = useNavigate();
  const [aremark, setaRemark] = useState('');

  if (!item) return <p>No product data.</p>;

  const handleSubmit = async (e) => {
    alert("Remark is given!")
    e.preventDefault();
    await axios.post(`http://localhost:8020/api/secondlife/adminremark/${item._id}`, { aremark });
  };

  return (
    <div className="admin-container">
      <div id="adminview-header">
          <NavLink to="/adminview" style={{color:"black",textDecoration:"none", display:"flex"}}>
            <IoMdArrowBack style={{fontSize:"25px"}} />
            <pre> Back to Admin profile </pre>
          </NavLink>
        </div>



      <h1 className="admin-title">Posted Product Ad</h1>

      {item.image && (
        <img
          src={`http://localhost:8020${item.image}`}
          alt="Product"
          className="admin-image"
        />
      )}

      <div className="admin-details">
        <h2><b>ID: </b> {item._id}</h2>
        <h2><b>Brand: </b> {item.brandName}</h2>
        <h2><b>Price: </b> {item.price}</h2>
        
            <h2><b>Condition: </b> {item.condition}</h2>
            <h2><b>Description :</b> {item.description}</h2>
            <h2><b>Ower:</b> {item.sellerName}</h2>
            <h2><b>Contact :</b> {item.sellerContact}</h2>
            <h2><b>Address :</b> {item.sellerAddress}</h2>
            <h2>
          <a href={item.location} target="_blank" rel="noopener noreferrer">
            View Location
          </a>
        </h2>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>Add Remark</h2>
        <input
          type="text"
          value={aremark}
          onChange={(e) => setaRemark(e.target.value)}
          placeholder="Enter remark..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}


