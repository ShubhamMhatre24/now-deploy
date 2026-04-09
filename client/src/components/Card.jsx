import { useState } from "react";
import "./styles/Card.css";
import { FaRupeeSign } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import {  useNavigate } from 'react-router-dom'
export default function Card({ data }) {
    const navigate=useNavigate();
    
    const viewProduct=(productId)=>{
      alert(productId)
    }
  return (
    <div className="card-container">
      
      {data.map((item, index) => (
        <div onClick={()=>{navigate("/view ",{state:{item}})}} key={index} className="card-item">
          
            {
                item.verify && <p id="verified-btn-style">Verified</p>
          }
          {
            item.image && ( <img
              src={`http://localhost:8020${item.image}`}
              alt="Product"
              className="card-image"
            />)
          }
          
          <div style={{display:"flex" , justifyContent:"space-between"}}>
            <div id="card-info-div">
            <h4>{item.brandName}</h4>
            <h3><FaRupeeSign style={{fontSize:"15px"}} />{item.price}</h3>
            
            <p style={{fontSize:"14px",lineHeight:"30px"}}><CiLocationOn />{item.sellerAddress}</p>
            {/*<button onClick={()=>{navigate("/view ",{state:{item}})}}>view</button>*/}
          </div>


           <div id="ad-heart-icon-div">
                <div><CiHeart id="ad-heart-icon" /></div>
            </div>
          </div>

        </div>
      ))}
      
       
    </div>
  );
}

