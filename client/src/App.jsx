import { useState } from 'react'
import Sellpage from './Sellpage'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/login'
import Sellform from './components/Sellform'
import View from './components/View'
import Signin from './components/Signin'
import Adminlogin from './components/Adminlogin'
import Adminview from './components/Adminview'
import ViewUserData from './components/ViewUserData'
import AdminCheck from './components/AdminCheck'
import Edit from './components/Edit'
import About from './components/About'
import Userads from './components/Userads'
function App() {

    


   return(
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sell" element={<Sellform />} />
      <Route path="/view" element={<View  />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/adminlogin" element={<Adminlogin />} />
      <Route path="/adminview" element={<Adminview />} />
      <Route path="/viewprofile" element={<ViewUserData />} />
      <Route path="/admincheck" element={<AdminCheck />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Userads" element={<Userads/>} />

    </Routes>
  </div>
  );
}

export default App
