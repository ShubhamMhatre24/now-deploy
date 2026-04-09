/*export default function View({ title }) {
    return (
        <>
            <h1>Product Details</h1>
            <h1>{title}</h1>
        </>
    );
}*/

import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import "./styles/view_ad.css"
import Navbar from './Navbar'
import { FaRupeeSign } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";

export default function View() {
    const location = useLocation();
    const { item } = location.state || {};
    const navigate=useNavigate();
    if (!item) return <p>No product data.</p>;

    return (
        <>
        <Navbar/> 

        <br />

        
        <div>
            <br />
           <div style={{width: "135px",height:"30px"}}>
             <NavLink style={{color:"black",textDecoration:"none"}} to="/">
                <div id="ad-backto-home">
                <span><IoMdArrowBack style={{fontSize:"25px"}} /></span>
                <p style={{fontSize:"16px"}}>Back to home</p>
            </div>
            </NavLink>
           </div>

            <br />

            <div id="view-ad-container">
            
            
            <div>
                <div id="ad-img">
                    {
                    item.image && ( <img
                    src={`http://localhost:8020${item.image}`}
                    alt="Product"
                    className="card-image view-img-div"
                    />)
                    }
                </div>
                <br />
                <div id="ad-info">
                    <div>
                        <h2> {item.brandName}</h2>
                        <h2> <FaRupeeSign style={{fontSize:"19px"}} /> {item.price}</h2>
                        <br />
                        <h4>Product Details:</h4>
                        <p>Condition : {item.condition}</p>
                        <p>Posted:</p>
                        <p>Address : {item.sellerAddress}</p>
                        <br />
                        <h4>Description</h4>
                        <p>{item.description}</p>
                    </div>
                    <div id="ad-heart-icon-div">
                        <div><CiHeart id="ad-heart-icon" /></div>
                    </div>
                </div>

                
            </div>

            <div>
                <div id="ad-seller-info">
                    <h4>Seller Information:</h4>
                    
                    <div style={{width:"240px",display:"flex",justifyContent:"space-between"}}>
                        <div ><BsPersonCircle style={{fontSize:"35px",marginTop:"5px"}} /></div>
                        
                        <div style={{lineHeight:"1.2"}}>
                            <p style={{fontSize:"20px"}}>{item.sellerName}</p>
                            <p style={{fontSize:"14px"}}>ID: {item._id}</p>
                        </div>
                    </div>
                    <p>Contact : {item.sellerContact}</p>
                    <p>Address : {item.sellerAddress}</p>
                    <br />
                    
                    <div style={{width:"295px",marginLeft:"20px"}}>
                        <a  href={item.location} style={{color:"white",textDecoration:"none"}} ><p id="view-loc-btn">View Location</p></a>
                    </div>
                        <br />
                     <button id="chat-btn">Chat with Seller</button>
                </div>
                <br />
                <div id="ad-sefty-tips" >
                    <h4>Safty Tips:</h4>
                    <p>1. Meet in a public place</p>
                    <p>2. Check the product/item before paying</p>
                    <p>3. Don't send money in advanced</p>
                    <p>4. Use secure payments, avoid sharing OTP/bank details.</p>
                    <p>5. If the deal looks “too good to be true,”it probably is.</p>
                    <p>6. Report any fraudulent seller or listing to the website immediately.</p>
                </div>
                
            </div>
            <br /><br />

         
           

        </div>
        </div>

        {/*
            <h1>Product Details</h1>
            <h2>ID: {item._id}</h2>
            <h2>Brand: {item.brandName}</h2>
            <h2>Price: {item.price}</h2>
            <h2><a href={item.location}>View Location</a></h2>
            <h2>Condition : {item.condition}</h2>
            <h2>Description : {item.description}</h2>
            <h2>Ower:{item.sellerName}</h2>
            <h2>Contact : {item.sellerContact}</h2>
            <h2>Address : {item.sellerAddress}</h2>
            */}
        
        
        
        
         
        </>
    );
}

