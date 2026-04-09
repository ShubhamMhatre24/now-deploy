import { useState } from "react";
import axios from "axios";
import "./styles/Sellform_style.css"
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom'


export default function Sellform() {
  const [formData, setFormData] = useState({
    username: "",
    brandName: "",
    price: "",
    image: "",
    location: "",
    condition: "",
    description: "",
    sellerName: "",
    sellerContact: "",
    sellerAddress: "",
  });

  const getValue = (e) => {
    let inputName = e.target.name;

    if (e.target.type === "file") {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        [inputName]: file, // File object
      }));
      console.log("Selected file:", file);
    } else {
      const inputValue = e.target.value;
      setFormData((prevData) => ({
        ...prevData,
        [inputName]: inputValue,
      }));
    }
  };

  const saveData = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", formData.username);
    data.append("brandName", formData.brandName);
    data.append("price", formData.price);
    data.append("image", formData.image);
    data.append("location", formData.location);
    data.append("condition", formData.condition);
    data.append("description", formData.description); // ✅ fixed spelling
    data.append("sellerName", formData.sellerName);   // ✅ consistent
    data.append("sellerContact", formData.sellerContact);
    data.append("sellerAddress", formData.sellerAddress);

    console.log("Submitting form data:", formData);

    try {
      await axios.post("http://localhost:8020/api/secondlife/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Data saved successfully");

      // reset state
      setFormData({
        username: "",
        brandName: "",
        price: "",
        image: "",
        location: "",
        condition: "",
        description: "",
        sellerName: "",
        sellerContact: "",
        sellerAddress: "",
      });
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
    }
  };

  return (
    <>
    <div>
      
      <div id="sell-page-nav">
              <div id="sellpage-arrow-div">
                  <NavLink to="/"><div> <IoMdArrowRoundBack className='arrow' /> </div></NavLink>
              </div>
      </div>

       
      <div style={{textAlign:"center"}}><h1>Post Your Products Ad</h1>
      </div>
       

      <div>
        <form onSubmit={saveData}>
            
          
          <div id="sellform-info-div">
            <br />
            <div id="sellform-product-info">
              
                <div style={{width:"660px", height:"40px",borderBottom:"1px solid black",padding:"10px 20px"}}><h2>Product details</h2></div>
                <br />
                <div style={{width:"600px",display:"flex",justifyContent:"space-between",padding:"0px 20px"}}>
                  <div>
                    <p>Product Name* </p>
                    <input
                    type="text"
                    name="brandName"
                    className="sellform-inputs-style"
                    placeholder="Enter Product Name ..."
                    value={formData.brandName}
                    onChange={getValue}
                    required
                    />
                  </div>

                  <div>
                    <p>Price*</p>
                    <input
                    type="number"
                    name="price"
                    className="sellform-inputs-style"
                    placeholder="Enter Price..."
                    value={formData.price}
                    onChange={getValue}
                    required
                    />
                  </div>
                </div>

              <br />
              
              <div style={{width:"600px",display:"flex",justifyContent:"space-between",padding:"0px 20px"}}>
                <div>
                  <p>Condition*</p>
                  <input
                  type="text"
                  name="condition"
                  className="sellform-inputs-style"
                  placeholder="Enter product condition..."
                  value={formData.condition}
                  onChange={getValue}
                  />
                </div>

                <div>
                  <p>Upload image*</p>
                  <input
                  type="file"
                  name="image"
                  className="sellform-inputs-style"
                  accept="image/*"
                  onChange={getValue}
                  required
                  />
                </div>
              </div>
              <br />
              <div style={{padding:"0px 20px"}}>
                <p>Description*</p>
                <input
                type="text"
                name="description"
                className="sellform-product_dec"
                placeholder="Describe your product..."
                value={formData.description}
                onChange={getValue}
                />
              </div>

            </div>

            <br /><br />

            <div id="sellform-user-info-div" >

              <div style={{width:"660px", height:"40px",borderBottom:"1px solid black",padding:"10px 20px"}}><h2>User Information</h2></div>
              <br />
              <div style={{width:"600px",display:"flex",justifyContent:"space-between",padding:"0px 20px"}}>
                <div>
                  <p>Username*</p>
                  <input
                  type="text"
                  name="username"
                  className="sellform-inputs-style"
                  placeholder="Enter your username..."
                  value={formData.username}
                  onChange={getValue}
                  required
                  />
                </div>

                <div>
                  <p>Your Name*</p>
                  <input
                  type="text"
                  name="sellerName"
                  className="sellform-inputs-style"
                  value={formData.sellerName}
                  onChange={getValue}
                  placeholder="Enter your full name..."
                  />
                </div>
              </div>

              <br />
              
              <div style={{width:"600px",display:"flex",justifyContent:"space-between",padding:"0px 20px"}}>
                <div>
                  <p>Contact No.*</p>
                  <input
                  type="tel"
                  name="sellerContact"
                  className="sellform-inputs-style"
                  placeholder="Enter Contact..."
                  value={formData.sellerContact}
                  onChange={getValue}
                  maxLength="10"
                  pattern="[0-9]{10}"
                  required
                  />
                </div>

                <div>
                  <p>Address*</p>
                  <input
                  type="text"
                  name="sellerAddress"
                  className="sellform-inputs-style"
                  placeholder="Enter Address..."
                  value={formData.sellerAddress}
                  onChange={getValue}
                  />
                </div>
              </div>  

              <br />
              
              <div style={{padding:"0px 20px"}}>
                <p>Add location link</p>
                <input
                type="text"
                name="location"
                placeholder="Enter location link..."
                className="sellform-loc-link"
                value={formData.location}
                onChange={getValue}
                />
                <p style={{fontSize:"14px",color:"#de5e5eff"}}>*Add location using Google Map</p>
              </div>
              
            </div>
            
          </div>
          <button id="post-btn" type="submit">Post</button>
        </form>
        <br /><br /><br />
      </div>
      
    </div>
    
    </>
  );
}
