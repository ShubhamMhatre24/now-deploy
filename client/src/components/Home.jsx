

import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import Card from './Card'
import Navbar from './Navbar'
import Footer from './Footer'
import { GoDash } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { FaRegComment, FaRegHandshake } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import "./styles/Home_style.css"

function Home() {
  const navigate = useNavigate()
  const [productList, setProductList] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [user, setUser] = useState(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const [searchName, setSearchName] = useState("")
  const [searchLocation, setSearchLocation] = useState("")

  let getAllProducts = () => {
    return axios.get('http://localhost:8020/api/secondlife/productlist')
      .then((res) => res.data)
      .then((finalData) => {
        setProductList(finalData)
        setFilteredProducts(finalData) // initially show all
      })
  }

  useEffect(() => {
    getAllProducts()
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    navigate("/login")
  }

  const handleChangeUsername = () => {
    const newUsername = prompt("Enter new username:", user?.username)
    if (newUsername && newUsername.trim() !== "") {
      const updatedUser = { ...user, username: newUsername }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
      alert("Username updated successfully!")
    }
    setDropdownOpen(false)
  }

  // filter products based on search
  const handleSearch = () => {
    

    let results = productList.filter(item => {
      const matchName = searchName === "" || item.brandName?.toLowerCase().includes(searchName.toLowerCase())
      const matchLocation = searchLocation === "" || item.sellerAddress?.toLowerCase().includes(searchLocation.toLowerCase())
      return matchName && matchLocation
    })
    setFilteredProducts(results)
  }

  return (
    <div>
      <Navbar />

      {/* User Dropdown */}
      <div style={{ textAlign: "right" }}>
        {user ? (
          <div>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              style={{ background: "none", border: "none", fontSize: "18px", cursor: "pointer" }}
            >
              {user.username} ⬇
            </button>
            {dropdownOpen && (
              <div style={{
                position: "absolute",
                right: 0,
                marginTop: "5px",
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
                padding: "10px",
                zIndex: 1000
              }}>
                <p onClick={handleChangeUsername} style={{ cursor: "pointer", margin: "5px 0" }}>Change Username</p>
                <p onClick={handleLogout} style={{ cursor: "pointer", margin: "5px 0" }}>Logout</p>
              </div>
            )}
          </div>
        ) : (
          <NavLink to="/login"><button style={{ padding: "5px 10px" }}>User Login</button></NavLink>
        )}
      </div>

      <main>
        <div id="main-content">
          <div id="big-tagline">
            <h1>Buy & Sell Your Items</h1>
            <p>Discover amazing deals on pre-owned items & connect with trusted service</p>
            <p>provides for all your needs </p>
          </div>
                
          {/* Search Section */}
          <div id="serach-option-div">
            <div style={{width:"900px",height:"100px",backgroundColor:" rgb(230, 242, 253)", marginLeft:"310px",borderRadius:"10px",border:"1px solid black", boxShadow:"20px 20px 30px rgba(0,0,0,0.2)"}}>
              <div id="search-item">
                <input 
                  type="search" 
                  className='search-size' 
                  placeholder='Location'
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <input 
                  type="search" 
                  className='search-size' 
                  placeholder='What you are looking for?' 
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
                
                <button id="search-btn" onClick={handleSearch}>Search</button>
              </div>
            </div>
          </div>

          <br />

          {/* Sell Option */}
          <div id="sell-option-div">
            <div><p className="sell-que"><GoDash /><GoDash /><GoDash /><GoDash /> You want to sell your items ? <GoDash /><GoDash /><GoDash /><GoDash /></p></div>
            <br /><br />
            <div className="sell-que"><NavLink to="/sell"><button id="sell-btn">Post Your Item (Free)</button></NavLink></div>
          </div>

          <br />

          {/* Fresh Recommendation */}
          <div id="fresh-recommendation-div">
            <div id="fresh-recommendation-line"><h1>Fresh recommendation</h1></div>
            <br />
            <div id="cards-in-row">
              <br />
              <Card data={filteredProducts} />
            </div>   
          </div>
        </div>
      </main>

      {/* Tips Section */}
      <div id="tips-container">
        <br />
        <div>
          <h1 className='tips-text-style'>How It Works</h1>
          <p className='tips-text-style'>Simple steps to buy & sell your goods</p>
        </div>
        <br /><br /><br />
        <div id="tips-div">
          <div className='tips-options'>
            <div id="search-tip-icon"><IoMdSearch className='tips-icon-style' /></div>
            <br />
            <div>
              <h3 className='tips-text-style'>Browse & Search</h3>
              <br />
              <p className='tips-text-style'>Find products using our advanced search and filters</p>
            </div>
          </div>
          <div className='tips-options'>
            <div id="comment-tip-icon"><FaRegComment className='tips-icon-style' /></div>
            <br />
            <div>
              <h3 className='tips-text-style'>Connect & Chat</h3>
              <br />
              <p className='tips-text-style'>Contact the seller directly through our platform</p>
            </div>
          </div>
          <div className='tips-options'>
            <div id="deal-tip-icon"><FaRegHandshake className='tips-icon-style' /></div>
            <br />
            <div>
              <h3 className='tips-text-style'>Meet & Deal</h3>
              <br />
              <p className='tips-text-style'>Arrange meetings, inspect items and negotiate the best deal</p>
            </div>
          </div>
          <div className='tips-options'>
            <div id="rate-tip-icon"><IoStarOutline className='tips-icon-style' /></div>
            <br />
            <div>
              <h3 className='tips-text-style'>Rate & Review</h3>
              <br />
              <p className='tips-text-style'>Share your experience to help build our trusted community</p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Home








