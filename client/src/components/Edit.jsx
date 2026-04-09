import { NavLink,useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./styles/signin_style.css"
import { IoMdArrowBack } from "react-icons/io";
 

   
 

export default function Edit()
{    const location = useLocation();
    const { item } = location.state || {};
     const navigate=useNavigate();
    //console.log(item)
    const [formData, setFormData] = useState({
    brandName: item?.brandName || "",
    price: item?.price || "",
    condition: item?.condition || "",
    description: item?.description || "",
    sellerName: item?.sellerName || "",
    sellerContact: item?.sellerContact || "",
    sellerAddress: item?.sellerAddress || ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      // Replace with your backend URL
      const response = await axios.put(
        `http://localhost:8020/api/secondlife/edit/${item._id}`, 
        formData
      );
      console.log("Updated:", response.data);

      alert("Product updated successfully!");

      // Redirect back to list page
      navigate("/viewprofile ");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product");
    }
  };
    return(
        <div>

          <div id="edit-ads-container">
            <br />
            <div>
              <div id="userprofile-header">
                <NavLink to="/viewprofile" style={{color:"black",textDecoration:"none", display:"flex"}}>
                <IoMdArrowBack style={{fontSize:"25px"}} />
                <p>Back to Profile</p>
                </NavLink>
              </div>
              <br />
              <div id="edit-post-info">
                <div style={{width:"560px",height:"40px",padding:"20px",border:"1px solid black",backgroundColor:"burlywood"}}>
                  <h2 style={{textAlign:"center"}}>Edit posted ad</h2>
                </div>
          
                <div style={{width:"520px",height:"620px",padding:" 20px 40px"/*,border:"1px solid red"*/}}>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>Brand Name</label>
                      <br />
                      <input type="text" className="edit-ads-style" name="brandName" value={formData.brandName} onChange={handleChange} />
                    </div>
                    <br />
                    <div>
                      <label>Price:</label>
                      <br />
                      <input type="number" className="edit-ads-style" name="price" value={formData.price}  onChange={handleChange} />
                    </div>
                    <br />
                    <div>
                      <label>Condition</label>
                      <br />
                      <input type="text" className="edit-ads-style" name="condition" value={formData.condition}  onChange={handleChange}/>
                    </div>
                    <br />
                    <div>
                      <label>Description</label>
                      <br />
                      <input type="text" className="edit-ads-style" name="description" value={formData.description}  onChange={handleChange}/>
                    </div>
                    <br />
                    <div>
                      <label>Name</label>
                      <br />
                      <input type="text" className="edit-ads-style" name="sellerName" value={formData.sellerName}  onChange={handleChange} />
                    </div>
                    <br />
                    <div>
                      <label>Contact</label>
                      <br />
                      <input type="text" className="edit-ads-style" name="sellerContact" value={formData.sellerContact}  onChange={handleChange}/>
                    </div>
                    <br />
                    <div>
                      <label>Address</label>
                      <br />
                    <input type="text" className="edit-ads-style" name="sellerAddress" value={formData.sellerAddress}  onChange={handleChange} />
                    </div>
                    <br />
                
                    
                    <button id="edit-ad-btn" type="submit">Save</button>
                  </form>
                </div>
              </div>
            </div>
          </div>





         {/* <h2>Edit Product</h2>
          <form onSubmit={handleSubmit}>
            <label>Brand Name</label>
            <input type="text" name="brandName" value={formData.brandName} onChange={handleChange} />

            <label>Price:</label>
            <input type="number" name="price" value={formData.price}  onChange={handleChange} />

            <label>Condition</label>
            <input type="text" name="condition" value={formData.condition}  onChange={handleChange}/>
            
              <label>Description</label>
            <input type="text" name="description" value={formData.description}  onChange={handleChange}/>

              <label>Name</label>
            <input type="text" name="sellerName" value={formData.sellerName}  onChange={handleChange} />

              <label>Contact</label>
            <input type="text" name="sellerContact" value={formData.sellerContact}  onChange={handleChange}/>
        
              <label>Address</label>
            <input type="text" name="sellerAddress" value={formData.sellerAddress}  onChange={handleChange} />
        
        
            
            <button type="submit">Save</button>
          </form> */}
        </div>
    )
}
