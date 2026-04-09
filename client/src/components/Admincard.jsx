import { useState } from "react";
import "./styles/Card.css";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
export default function Admincard({ data }) {
    const navigate=useNavigate();
    
    const viewProduct=(productId)=>{
      alert(productId)
    }

    function verifyItem(itemId)
    {
       // alert(itemId);
        axios.post(`http://localhost:8020/api/secondlife/verify/${itemId}`)
        .then((res)=>{console.log(res.data);
          alert("Updated Sucessfully")
        }
         )
        
    }

  return (
    <div className="adminview-card-style">
      {data.map((item, index) => (
        <div key={index} className="card-item">

          {
            item.image && ( <img
              src={`http://localhost:8020${item.image}`}
              alt="Product"
              className="card-image"
            />)
          }

          <h3>{item.brandName}</h3>
          <h3>{item.price}</h3>
          
          

          <div style={{width:"130px",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <button style={{width:"60px",height:"30px",backgroundColor:"#428bca" , color:"white"}} onClick={()=>{navigate("/admincheck ",{state:{item}})}}>view</button>
            <button style={{width:"60px",height:"30px",backgroundColor:"#5cb85c" , color:"white"}} onClick={()=>{verifyItem(item._id)}}>Verified</button>
          </div>
        
        </div>
      ))}
    </div>
  );
}
