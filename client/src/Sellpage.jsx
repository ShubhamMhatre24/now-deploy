import React from 'react';
import "./Sellpage_style.css";
import axios from 'axios';
import { useState } from 'react';
function Sellpage() {
  const [formData, setFormData] = useState({
  brandName: "",
    price: 0,
    category: "",
    condition: "",
    description: "",
  
  images: [], // Can hold URLs or base64 strings
  sellerName: "",
  sellerContact: "",

  sellerAddress:"",
  _id: ""
});

let saveData=(e)=>{
  e.preventDefault();
  console.log(formData);

 axios.post('http://localhost:8020/api/secondlife/upload', formData)
.then((res)=>{
    console.log("Enquiry Saved :",res.data);
    alert("Data Saved Sucessfully");
    setFormData({
    brandName: "",
    price: 0,
    category: "",
    condition: "",
    description: "",
  
  images: [], // Can hold URLs or base64 strings
  sellerName: "",
  sellerContact: "",

  sellerAddress:"",
  _id: "" // Optional, useful for editing or resetting after submission
})

  }).catch((err)=>{
    console.log(err.message);
  });
}

// 
const getValue = (e) => {
 let inputname=e.target.name;
        let inputvalue=e.target.value;
        let olddata={...formData};
        olddata[inputname]=inputvalue;
        setFormData(olddata);
};

  return (
    <>
      <header id="sell-page-nav">
        <div id="arrow-div">
          {/* Back arrow and navigation removed */}
        </div>
      </header>

      <main>
        <div style={{ textAlign: "center" }}>
          <h1>Post Your Products Ad</h1>
        </div>
        <br />

        <div id="selling-info-div">
          <form onSubmit={saveData}>
            <div id="product-info">
              <h2>Product Details</h2>
              <br />
              <div className='product-grid-div'>
                <div>
                  <label htmlFor="brand-name">Brand Name*</label>
                  <br />
                  <input name="brandName" onChange={getValue} type='text' id="brand-name" placeholder="e.g., iPhone 14 Pro Max 256GB" />
                </div>

                <div>
                  <label htmlFor="price">Price (₹)*</label>
                  <br />
                  <input  name="price" onChange={getValue} id="price" type="number" placeholder='5900' />
                </div>

                <div>
                  <label  onChange={getValue} htmlFor="categories">Select Categories*</label>
                  <br />
                  <select id="categories" name="category" onChange={getValue}>

                    <option>Select categories</option>
                    <option>Car</option>
                    <option>Bike</option>
                    <option>Mobile</option>
                    <option>Furniture</option>
                    <option>Book or Sports</option>
                    <option>Electronics</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="condition">Condition*</label>
                  <br />
                  <select  onChange={getValue}  id="condition" name="condition">
                    <option>Select Condition</option>
                    <option>New</option>
                    <option>Like New</option>
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Poor</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <br />
              <div>
                <label htmlFor="description">Description*</label>
                <br />
                <textarea  name='description' onChange={getValue}  id="description" placeholder='Describe your item in detail...' />
              </div>
            </div>

            <br />

            <div id="product-img-div">
              <h2>Add Product Image</h2>
              <br />
              <div id="input-img-div">
                <input name='image' 
                  type="file"
                  accept="image/*"
                  multiple
                  
                />
                <p style={{ fontSize: "12px", color: "red" }}>
                  Image upload disabled
                </p>
              </div>
            </div>

            <br />

            <div id="seller-info">
              <h2>Personal Details</h2>
              <br />
              <div>
                <label htmlFor='seller-name'>Your Name*</label>
                <br />
                <input  name='sellerName' onChange={getValue}  type="text" className="seller-name-contact" placeholder='Enter your name....' />
              </div>
              <br />
              <div>
                <label htmlFor='seller-contact'>Contact No.*</label>
                <br />
                <input name='sellerContact' onChange={getValue}  type="number" className="seller-name-contact" placeholder='Enter your number....' />
              </div>
              <br />
              <div>
                <label htmlFor='seller-add'>Address*</label>
                <br />
                <textarea name='sellerAddress' onChange={getValue}  id="seller-add" placeholder='Enter your address....' />
              </div>
            </div>

            <br />
            <button type='submit' id="post-ad-btn">Post Ad</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Sellpage;
